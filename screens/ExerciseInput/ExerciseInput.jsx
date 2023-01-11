import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const ExerciseInput = ({ route }) => {
  const name = route.params.name;
  const [number , setNumber] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Exercise</Text>
      <Text style={styles.label}>Exercise</Text>
      <Text>{name}</Text>
      <View>
        <Text style={styles.label}>Series</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(text) => this.onChanged(text)}
          value={number}
          maxLength={10} 
        />
      </View>
    </View>
  );
};

export default ExerciseInput;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: "#022",
    fontWeight: "regular",
    marginVertical: 3,
    marginTop: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "60%",
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: 70,
    borderRadius: 10,
    backgroundColor: "#266dd3",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});
