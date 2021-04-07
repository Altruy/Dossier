

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import NoteTile from "../../components/NoteTile";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import data from "../../data/tile-data";

const Notes = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ImageBackground
      source={require("../../assets/Notes-background.png")}
      style={styles.image}
    >
      <View style={styles.upperbar}>
        <Searchbar
          style={styles.search}
          placeholder="Search"
          iconColor="white"
          placeholderTextColor="white"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewNote");
          }}
          style={styles.btn}
        >
          <Text style={styles.text}>
            New
            <Icon name="add" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: 20,
          justifyContent: "space-around",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteTile data={item} navigation={navigation} />
        )}
        style={styles.fl}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "20%",
    paddingBottom: "15%",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
  },

  upperbar: {
    flex: 1,
    top: "10%",
    marginBottom: "20%",
    marginLeft: "20%",

    flexDirection: "row",
    paddingBottom: 10,
    right: "10%",
  },
  search: {
    position: "absolute",
    width: "50%",
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    left: "20%",
  },
  btn: {
    position: "absolute",
    fontSize: 18,
    width: "21%",
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    paddingTop: 12,
    left: "75%",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default Notes
