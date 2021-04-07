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
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import SideBar from "../components/SideBar";
import CreateTasks from "../screens/Tasks/CreateTasks";
import EditTask from "../screens/Tasks/EditTask";
import Tasks from "../screens/Tasks/Tasks";
import Collaborations from "../screens/Home/Collaborations";
import Settings from "../screens/Home/Settings";
import Signin from "../screens/Home/Signin";
import Signup from "../screens/Home/Signup";
import Chat from "../screens/Chat/Chat";
import Chatbox from "../screens/Chat/Chatbox";
import ChatGroup from "../screens/Chat/ChatGroup";
import Calendar from "../screens/Calendar/Calendar";
import CreateEvent from "../screens/Calendar/CreateEvent";
import EditEvent from "../screens/Calendar/EditEvent";
import Notes from "../screens/Notes/Notes";
import EditNote from "../screens/Notes/EditNote";
import Notification from "../screens/Notification/Notification";

import Members from "../screens/Members/Members";
import Topbar from "../components/topBar";

const TaskNavigator = createStackNavigator(
    {
        //Members: Members,
        Tasks: Tasks,
        CreateTasks: CreateTasks,
        EditTask: EditTask,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        },
    }
)

const CollaborationNavigator = createStackNavigator(
    {
        Signup: Signup,
        Collaborations: Collaborations,
        Signin: Signin,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        },
    }
)

const SettingsNavigator = createStackNavigator(
    {
        Settings: Settings,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        },
        // {
        //     defaultNavigationOptions: {
        //         headerStyle: {
        //             backgroundColor: 'black',
        //         },
        //         headerTintColor: 'white',
        // },
    }
)

const NotesNavigator = createStackNavigator(
    {
        Notes: Notes,
        EditNote: EditNote,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        },
    }
)

const CalendarNavigator = createStackNavigator(
    {
        Calendar: Calendar,
        CreateEvent: CreateEvent,
        EditEvent: EditEvent,
        // Notification: Notification,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        },
    }
)

const ChatNavigator = createStackNavigator(
  {
    Chat: Chat,
    Chatbox: Chatbox,
    ChatGroup: ChatGroup
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    }
  }
)
const MembersNavigator = createStackNavigator(
    {
        Members: Members,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        },
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

Members.navigationOptions = (navData) => {
  return {
    headerTitle: "Members",
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

EditEvent.navigationOptions = (navData) => {
    return {
        headerTitle: 'Edit Event',
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
    headerRight:()=>{
      return <View style={styles.container}>
         <Icon3
        name="bell"
        color="white"
        size={30}
        
        style={{padding: 10}}
        onPress={() => console.log('bell')}
      />
      <Icon3
        name="home"
        color="white"
        size={30}
        
        style={{padding: 10}}
        onPress={() => console.log('home')}
      />
      
      <Icon2
        name="options-vertical"
        color="white"
        size={30}
        style={{padding: 10}}
        onPress={() => console.log('option')}
      />
      
    </View> 
    }
  };
};

Chatbox.navigationOptions = (navData) => {
    return {
        headerTitle: 'Chat',
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

Settings.navigationOptions = (navData) => {
    return {
        headerTitle: 'Settings',
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

const DrawerNavigator = createDrawerNavigator(
  {
    Chat: ChatNavigator,
    Tasks: TaskNavigator,
    Notes: NotesNavigator,
    Calendar: CalendarNavigator,
    Members: MembersNavigator,
    Settings: SettingsNavigator,
    Notification: Notification
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
        (item) => item.key !== "Settings" && item.key !== "Members" && item.key !== "Notification"
      );
      return <SideBar {...copyprops} />;
    },
  }
)

export default createAppContainer(DrawerNavigator);


const styles = StyleSheet.create({
  container: {
    position:'absolute',
    height:'100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
  modal: {
    marginTop:'75%',
    marginLeft:'16%',
    height: 220,
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "black",
    opacity:0.91
  },
  note: {
    position: "relative",
    top: -30,
    fontSize: 22,
    fontWeight:'bold',
    color: "white",
  },
  title: {
    position: "relative",
    left: 0,
    paddingTop: '3%',
    fontSize: 15,
    color: "white",
    fontSize:18
  },
  input: {
    top: -10,
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "60%",
    height: "60%",
    color:'white',
    paddingLeft:15,
    fontSize:18
  },
  btn: {
    position: "relative",
    top: 0,
    left: "1%",
    color: "white",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    paddingTop: 4,
    fontSize:18
  },
  times: {
    position: "relative",
    top: -10,
    left: "37%",
  },
});

