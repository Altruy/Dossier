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
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../components/SideBar";
import Tasks from "../screens/Tasks/Tasks";
import Settings from "../screens/Home/Settings";
import Chat from "../screens/Chat/Chat";
import CalendarHome from "../screens/Calendar/CalendarHome";
import Notes from "../screens/Notes/Notes";
import Notification from "../screens/Notification/Notification";
import Members from "../screens/Members/Members";



const DrawerNavigator = createDrawerNavigator(
  {
    Notes: Notes,
    Tasks: Tasks,
    Chat: Chat,
    Calendar: CalendarHome,
    Members: Members,
    Settings: Settings,
    Notifs: Notification,
  },
  {
    contentOptions: {
      labelStyle: {
        color: "white",
        fontSize: 18,
      },
    },
    contentComponent: (props) => {
      var copyprops = Object.assign({}, props);
      copyprops.items = copyprops.items.filter(
        (item) => item.key !== "Settings" && item.key !== "Members" 
        && item.key !== "Notifs" 
      );
      return <SideBar {...copyprops} />;
    },
  }
)

export default createAppContainer(DrawerNavigator);
