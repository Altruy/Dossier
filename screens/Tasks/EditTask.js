import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const EditTask = () => {
  return (
    <View style={styles.container}>
      <Text>The Edit Task Screen!</Text>
    </View>
  );
};

EditTask.navigationOptions = {
  headerTitle: "Edit Task",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditTask;
