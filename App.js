
import React from "react";

import AppNavigator from "./navigation/Navigator";

import { Provider as PaperProvider } from "react-native-paper";

import { AuthProvider } from './auth_providers/Auth';

import { WelcomeView } from "./backend/views/WelcomeView";

export default function App() {

  return (
    <AuthProvider>
    <PaperProvider>
       <WelcomeView/>
    </PaperProvider>
    </AuthProvider>
  );
}
