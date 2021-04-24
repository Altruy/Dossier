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
import CreateTasks from "../screens/Tasks/CreateTasks";
import EditTask from "../screens/Tasks/EditTask";
import Tasks from "../screens/Tasks/TasksHome";

const TaskNavigator = createStackNavigator(
    {
        Tasks: Tasks,
        CreateTasks: CreateTasks,
        EditTask: EditTask,
    },
    {
      headerMode:'none'
    }
)

Tasks.navigationOptions = (navData) => {
    return {
        headerTitle: 'Tasks',
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

CreateTasks.navigationOptions = (navData) => {
    return {
        headerTitle: 'Create Tasks',
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

EditTask.navigationOptions = (navData) => {
    return {
        headerTitle: 'Edit Task',
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


export default createAppContainer(TaskNavigator);

