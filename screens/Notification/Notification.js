import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>The Notification Screen!</Text>
    </View>
  );
};

Notification.navigationOptions = {
  headerTitle: "Notifications",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Notification;
