
import React from "react";

import AppNavigator from "./navigation/Navigator";

import { Provider as PaperProvider } from "react-native-paper";

import { AuthProvider } from './auth_providers/Auth';

import BackNav from './navigation/BackNav'

export default function App() {

  return (
    <AuthProvider>
    <PaperProvider>
       <BackNav/>
    </PaperProvider>
    </AuthProvider>
  );
}
