import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RoutineCard } from "../../components/RoutineCard";
import routines from "../../api";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routines</Text>
      <View style={styles.routinesContainer}>
        <FlatList
          data={routines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RoutineCard key={item.name} data={item} />}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('New Routine')}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    height: "100%",
    
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    
  },
  routinesContainer: {
    height: "90%",
    maxWidth: "95%",
    paddingHorizontal: 5,
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 100,
    height: 100,
    backgroundColor: "#266dd3",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 48,
    color: "white",
  },
});
