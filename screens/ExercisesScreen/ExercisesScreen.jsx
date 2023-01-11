import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "../../components";

const ExerciseScreen = ({ route }) => {
  const navigation = useNavigation();
  const [exercises] = useFetch(
    `https://wger.de/api/v2/exercise/?category=${route.params.category}&language=2&limit=100`
  );

  if (!exercises) return <Spinner />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <FlatList
        data={exercises.results}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("Exercise Detail", { id: item.id })
            }
          >
            <ListItem key={item.id} data={item}></ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  listItem: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 24,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    paddingLeft: 20,
  },
});
