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
import Icon from "react-native-vector-icons/Ionicons";
import Calendar from "../screens/Calendar/Calendar"
import CreateEvent from "../screens/Calendar/CreateEvent";


const CalendarNavigator = createStackNavigator(
    {
        Calendar: Calendar,
        CreateEvent: CreateEvent,
    },
    {
        headerMode:'none'
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: 'black',
        //     },
        //     headerTintColor: 'white',
        // },
    }
)


CreateEvent.navigationOptions = (navData) => {
    return {
        headerTitle: 'Create Event',
        headerLeft: () => (
            <Icon
                type="ionicon"
                name="md-menu"
                color="white"
                size={35}
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        ),
    }
}

Calendar.navigationOptions = (navData) => {
    return {
        headerTitle: 'Calendar',
        headerLeft: () => (
            <Icon
                type="ionicon"
                name="md-menu"
                color="white"
                size={35}
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        ),
    }
}

export default createAppContainer(CalendarNavigator);
