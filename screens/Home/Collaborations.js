import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Collaborations = () => {
  return (
    <View style={styles.container}>
      <Text>The Collaboration Screen!</Text>
    </View>
  );
};

Collaborations.navigationOptions = {
  headerTitle: "Collaborations",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Collaborations;
