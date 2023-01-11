import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RoutineCard = ({ data }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        {data.exercises.map((el) => (
          <Text>{el}</Text>
        ))}
       
      </View>
    </TouchableOpacity>
  );
};

export default RoutineCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 150,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomColor: "#166",
    borderBottomWidth: 1,
  },
  exercises: {},
});
