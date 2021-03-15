import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>The Chat Screen!</Text>
    </View>
  );
};

Chat.navigationOptions = {
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

export default Chat;
