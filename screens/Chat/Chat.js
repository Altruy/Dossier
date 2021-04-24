import React, {useState, useEffect} from "react";
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
import TopBar from "../../components/TopBar";
import ChatNav from "../../navigation/ChatNav";

const Chat = ({ navigation }) => {
  
  return (
    <ImageBackground
      source={require("../../assets/Chat-background.png")}
      style={styles.image}
    >
      <TopBar navigation={navigation} title={'Chat'}/>
      <ChatNav/>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
});
export default Chat;
