import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native' 

const ListItem = ({data}) => {
	const navigation = useNavigation()

  return (
      <Text style={styles.listItem}>{data.name}</Text>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "center",
		paddingTop: 10,
		fontSize: 18
  },
});
