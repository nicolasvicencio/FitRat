import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Spinner } from "../../components";
import ListItem from "../../components/ListItem/ListItem";
import useFetch from "../../hooks/useFetch";

const CategoryScreen = ({navigation}) => {
  const [categories] = useFetch("https://wger.de/api/v2/exercisecategory/");  
  
  if (!categories || categories.length === 0) return <Spinner />
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories.results}
        renderItem={({ item }) => (
          <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate("Exercises", { category: item.id })
          }
          >
          <ListItem key={item.id} data={item} />
          </TouchableOpacity>
          )}/>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    paddingLeft: 20,
  },
});
