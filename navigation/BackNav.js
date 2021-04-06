import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { WelcomeView } from "../WelcomeView";
import AppNavigator from './Navigator'

import SignIn from "../screens/Home/Signin";
import SignUp from "../screens/Home/Signup";
import Collaboration from "../screens/Home/Collaborations";


const BackNav = createStackNavigator(
    {
        // WelcomeView: WelcomeView,
        SignIn: SignIn,
        SignUp: SignUp,
        Collabs : Collaboration,
        Home: AppNavigator,
    },
    {
      headerMode:"none"
    }
  );
  
  export default createAppContainer(BackNav);
  
