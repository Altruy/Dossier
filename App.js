import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React from "react";

import { Provider as PaperProvider } from "react-native-paper";

import { AuthProvider } from './auth_providers/Auth';

import MainNavigator from './navigation/BackNav'

export default function App() {

  return (
    <AuthProvider>
      <PaperProvider>
        <MainNavigator/>
      </PaperProvider>
    </AuthProvider>
  );
}
