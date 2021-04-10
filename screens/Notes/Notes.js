import React ,{ useEffect, useState } from "react";
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
  Alert
} from "react-native";
import TopBar from "../../components/TopBar";
import NotesNav from "../../navigation/NoteNav";

const Notes = ({ navigation }) => {


  return (
    <ImageBackground
      source={require("../../assets/Notes-background.png")}
      style={styles.image}
    >
      <TopBar navigation={navigation} title={'Notes'} />
      <NotesNav />
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
  },

});

export default Notes
