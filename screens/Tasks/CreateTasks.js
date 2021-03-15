import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const CreateTasks = () => {
  return (
    <View style={styles.container}>
      <Text>The Create Task Screen!</Text>
    </View>
  );
};

CreateTasks.navigationOptions = {
  headerTitle: "Create Tasks",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateTasks;
