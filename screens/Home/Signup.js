import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>The Signup Screen!</Text>
    </View>
  );
};

Signup.navigationOptions = {
  headerTitle: "Sign Up",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Signup;
