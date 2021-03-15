import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text>The Signin Screen!</Text>
    </View>
  );
};

Signin.navigationOptions = {
  headerTitle: "Sign In ",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Signin;
