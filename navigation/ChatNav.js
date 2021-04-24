import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TextInput,
  Modal,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";
import Chat from "../screens/Chat/ChatHome";
import Chatbox from "../screens/Chat/Chatbox";
import ChatGroup from "../screens/Chat/ChatGroup";
  
const ChatNavigator = createStackNavigator(
  {
    Chat: Chat,
    Chatbox: Chatbox,
    ChatGroup: ChatGroup,
  },
  {
    headerMode:'none',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: "black",
    //   },
    //   headerTintColor: "white",
    // }
  }
)
Chat.navigationOptions = (navData) => {
  return {
    headerTitle: "Chat",
    headerLeft: () => (
      <Icon
        type="ionicon"
        name="md-menu"
        color="white"
        size={35}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};


Chatbox.navigationOptions = (navData) => {
    return {
      headerTitle: "Chat",
      headerLeft: () => (
        <Icon
          type="ionicon"
          name="md-menu"
          color="white"
          size={35}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      ),
    };
  };
  

ChatGroup.navigationOptions = (navData) => {
  return {
    headerTitle: "Chat",
    headerLeft: () => (
      <Icon
        type="ionicon"
        name="md-menu"
        color="white"
        size={35}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};


export default createAppContainer(ChatNavigator);
