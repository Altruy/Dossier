import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TextInput,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Invite = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Icon style={styles.times} name="times" size={20} color="white" />

        <Text style={styles.note}>New Note</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Title:</Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.btn}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: "25%",
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "black",
  },
  note: {
    position: "relative",
    top: -25,
    fontSize: 20,
    color: "white",
  },
  title: {
    position: "relative",
    left: 0,
    paddingTop: 6,
    fontSize: 15,
    color: "white",
  },
  input: {
    margin: 5,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "60%",
    height: "60%",
  },
  btn: {
    position: "relative",
    top: 18,
    left: "1%",
    color: "white",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    paddingTop: 4,
  },
  times: {
    position: "relative",
    top: -18,
    left: "42%",
  },
});

export default Invite;
