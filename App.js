import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/Navigator";
import Collaborations from "./screens/Home/Collaborations";
import NoteTile from "./components/NoteTile";
import NoteModal from "./components/NoteModal";
import TestM from "./components/TestM";
<<<<<<< HEAD
import TestO from "./components/TestO";
import TestA from "./components/TestA";
export default function App() {
  return <TestO />;
=======
import { Provider as PaperProvider } from "react-native-paper";
import EditNote from "./screens/Notes/EditNote";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
>>>>>>> dfb87acdd187742c4ae63ae57068f2790f35d19c
}
