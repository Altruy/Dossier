import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>The Settings Screen!</Text>
    </View>
  );
};

Settings.navigationOptions = {
  headerTitle: "Settings",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
