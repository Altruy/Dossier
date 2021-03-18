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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../constants/colors";

const NoteTile = ({ title, user }) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {}}
      background={TouchableNativeFeedback.Ripple("purple", false)}
    >
      <View style={styles.tile}>
        <ImageBackground
          source={require("../assets/Notes-tile.png")}
          style={styles.image}
        >
          <Icon
            style={styles.star}
            name="star"
            size={18}
            color={colors.noteback}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.user}>{user}</Text>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: "20%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  star: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  title: {
    position: "relative",
    textAlign: "center",
    color: "white",
    fontSize: 15,

    // alignSelf: "stretch",
  },
  user: {
    position: "relative",
    textAlign: "right",
    paddingRight: 8,
    bottom: -55,
    paddingRight: "6%",
    paddingBottom: "12%",
    fontSize: 10,
    color: "white",
  },
});

export default NoteTile;
