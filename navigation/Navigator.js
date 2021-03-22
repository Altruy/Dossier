import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CreateTasks from "../screens/Tasks/CreateTasks";
import EditTask from "../screens/Tasks/EditTask";
import Tasks from "../screens/Tasks/Tasks";
import Collaborations from "../screens/Home/Collaborations";
import Settings from "../screens/Home/Settings";
import Signin from "../screens/Home/Signin";
import Signup from "../screens/Home/Signup";
import Chat from "../screens/Chat/Chat";
import Chatbox from "../screens/Chat/Chatbox";
import Calendar from "../screens/Calendar/Calendar";
import CreateEvent from "../screens/Calendar/CreateEvent";
import EditEvent from "../screens/Calendar/EditEvent";
import Notes from "../screens/Notes/Notes";
import EditNote from "../screens/Notes/EditNote";
import Notification from "../screens/Notification/Notification";

const TaskNavigator = createStackNavigator(
  {
    Tasks: Tasks,
    CreateTasks: CreateTasks,
    EditTask: EditTask,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    },
  }
);

const CollaborationNavigator = createStackNavigator(
  {
    Signup: Signup,
    Collaborations: Collaborations,
    Signin: Signin,
    Settings: Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    },
  }
);

const NotesNavigator = createStackNavigator(
  {
    Notes: Notes,
    EditNote: EditNote,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    },
  }
);

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
        backgroundColor: "black",
      },
      headerTintColor: "white",
    },
  }
);

const ChatNavigator = createStackNavigator(
  {
    Chat: Chat,
    Chatbox: Chatbox,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    },
  }
);

CreateEvent.navigationOptions = (navData) => {
  return {
    headerTitle: "Create Event",
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
    headerTitle: "Edit Event",
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

Calendar.navigationOptions = (navData) => {
  return {
    headerTitle: "Calendar",
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

Tasks.navigationOptions = (navData) => {
  return {
    headerTitle: "Tasks",
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

CreateTasks.navigationOptions = (navData) => {
  return {
    headerTitle: "Create Tasks",
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

EditTask.navigationOptions = (navData) => {
  return {
    headerTitle: "Edit Task",
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

Notes.navigationOptions = (navData) => {
  return {
    headerTitle: "Notes",
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

EditNote.navigationOptions = (navData) => {
  return {
    headerTitle: "Edit Note",
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

const MainNavigator = createDrawerNavigator({
  Signin: Signin,
  Signup:Signup,
  Notes: NotesNavigator,
  Tasks: TaskNavigator,
  Calendar: CalendarNavigator,
  Chat: ChatNavigator,
  Settings: Settings,
});

export default createAppContainer(MainNavigator);
