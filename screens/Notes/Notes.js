import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Notes = () => {
  return (
    <View style={styles.container}>
      <Text>The Notes Screen!</Text>
    </View>
  );
};

Notes.navigationOptions = {
  headerTitle: "Notes",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Notes;
