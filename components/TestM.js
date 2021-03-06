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
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Accordian from "./Accordian";
import TaskAcc from "./TaskAcc";

const TestM = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <View style={styles.container}>
      <TaskAcc />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.homeback,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    width: "100%",
  },
  dropdown: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  box: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "90%",
    borderRadius: 15,
  },
  title: {
    alignItems: "flex-start",
    color: "white",
    fontSize: 16,
  },
  answer: {
    padding: 15,
    color: "white",
    fontSize: 14,
  },
  icon: {
    position: "absolute",
    right: 10,
  },
  accordian: {
    width: "100%",
    alignItems: "center",
  },
});

export default TestM;
