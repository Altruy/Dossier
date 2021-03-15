import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/Navigator";
import Collaborations from "./screens/Home/Collaborations";

export default function App() {
  return <AppNavigator />;
}
