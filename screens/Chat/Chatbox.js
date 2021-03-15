import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Chatbox = () => {
  return (
    <View style={styles.container}>
      <Text>The Chatbox Screen!</Text>
    </View>
  );
};

Chatbox.navigationOptions = {
  headerTitle: "Chat",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Chatbox;
