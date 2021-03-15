import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Collaborations from "../screens/Home/Collaborations";
import Hamburger from "../screens/Home/Hamburger";
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
import CreateTasks from "../screens/Tasks/CreateTasks";
import EditTask from "../screens/Tasks/EditTask";
import Tasks from "../screens/Tasks/Tasks";

const AppNavigator = createStackNavigator(
  {
    Collaborations: Collaborations,
    // Hamburger: Hamburger,
    // Settings: Settings,
    // Signin: Signin,
    // Signup: Signup,
    // Chat: Chat,
    // Chatbox: Chatbox,
    // Calendar: Calendar,
    // CreateEvent: CreateEvent,
    // EditEvent: EditEvent,
    // Notes: Notes,
    // EditNote: EditNote,
    // Notification: Notification,
    // CreateTasks: CreateTasks,
    // EditTask: EditTask,
    // Tasks: Tasks,
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

export default createAppContainer(AppNavigator);
