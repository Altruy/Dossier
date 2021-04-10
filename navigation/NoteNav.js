import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import Notes from "../screens/Notes/NotesHome";
import EditNote from "../screens/Notes/EditNote";

const NotesNavigator = createStackNavigator(
    {
        Notes: Notes,
        EditNote: EditNote,
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

Notes.navigationOptions = (navData) => {
    return {
        headerTitle: 'Notes',
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

EditNote.navigationOptions = (navData) => {
    return {
        headerTitle: 'Edit Note',
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

export default createAppContainer(NotesNavigator);
