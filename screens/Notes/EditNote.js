import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import data from "../../data/tile-data";

const EditNote = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <ImageBackground
      source={require("../../assets/Notes-background.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="arrow-back-sharp"
            size={35}
            color="white"
            onPress={() => {}}
          />
          <Text style={styles.title}>Title</Text>
          <Icon
            style={styles.check}
            name="checkmark-circle-outline"
            size={35}
            color="white"
            onPress={() => {}}
          />
        </View>
        <TextInput
          multiline={true}
          spellCheck={true}
          style={styles.input}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: "20%",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "400",
    paddingLeft: "2%",
  },
  input: {
    position: "relative",
    paddingTop: "5%",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },

  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  check: {
    paddingLeft: "70%",
  },
});

export default EditNote;
