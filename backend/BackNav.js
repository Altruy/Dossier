import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TasksProvider } from "./providers/TasksProvider";
import { WelcomeView } from "./views/WelcomeView";
import { ProjectsView } from "./views/ProjectsView";
import { TasksView } from "./views/TasksView";

import { Logout } from "./components/Logout";


const BackNav = createStackNavigator(
    {
        Welcome: WelcomeView,
        ProjectsView: ProjectsView,
        TasksList: TasksView
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
  
  export default createAppContainer(BackNav);
  