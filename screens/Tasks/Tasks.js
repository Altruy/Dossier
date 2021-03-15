import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text>The Tasks Screen!</Text>
    </View>
  );
};

Tasks.navigationOptions = {
  headerTitle: "Tasks",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Tasks;
