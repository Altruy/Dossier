import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const EditNote = () => {
  return (
    <View style={styles.container}>
      <Text>The Edit Note Screen!</Text>
    </View>
  );
};

EditNote.navigationOptions = {
  headerTitle: "Edit Note",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditNote;
