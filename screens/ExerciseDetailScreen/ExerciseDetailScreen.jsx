import React, { useEffect, useState } from "react";
import { Spinner } from "../../components";
import useFetch from "../../hooks/useFetch";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExerciseDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const [details] = useFetch(
    `https://wger.de/api/v2/exerciseinfo/${route.params.id}`
  );

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }


  const addExercise = () => {
    
    navigation.navigate('New Routine')
  }


  if (!details) return <Spinner />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{details.name}</Text>
      <View style={styles.card}>
        <View>
          <Text style={styles.subTitle}>
            Category: <Text style={styles.info}>{details.category.name}</Text>
          </Text>
        </View>
        {details.images &&
          details.images.map((el) => (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: el.image }} />
            </View>
          ))}
        <View>
          <Text style={styles.subTitle}>Description: </Text>
          <Text style={styles.info}>{removeTags(details.description)}</Text>
        </View>
        {details.muscles &&
          details.muscles.map((el) => (
            <View>
              <Text style={styles.subTitle}>Muscles: </Text>
              <Text style={styles.info}> - {el.name}</Text>
            </View>
          ))}
        {details.muscles_secondary && (
          <View>
            <Text style={styles.subTitle}>Secondary Muscles: </Text>
            {details.muscles_secondary.map((el) => (
              <Text style={styles.info}> - {el.name}</Text>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Exercise Input", { name: details.name })
          }
        >
          <Text style={styles.plus}>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    backgroundColor: "#266dd3",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  subTitle: {
    fontSize: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#eee",
    objectFit: 'contain'
  },
  imageError: {
    fontSize: 40,
    color: "gray",
    marginVertical: 10,
  },
  info: {
    color: "gray",
    marginVertical: 5,
  },
  button: {
    // position: "absolute",
    // bottom: 30,
    // right: 10,
    textAlign: "center",
    marginTop: 10,
    width: "100%",
    height: 40,
    backgroundColor: "#266dd3",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  plus: {
    fontSize: 24,
    color: "white",
  },
  modal: {
    backgroundColor: "white",
    height: "60%",
  },
});
