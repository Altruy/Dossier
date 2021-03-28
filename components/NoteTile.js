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
import { Searchbar } from "react-native-paper";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../constants/colors";

const NoteTile = ({ data, navigation }) => {
  const { id, name, user, fave } = data;
  const [Star, setStar] = useState(false);

  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("EditNote");
      }}
      background={TouchableNativeFeedback.Ripple("purple", false)}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/Notes-tile.png")}
          style={styles.image}
        >
          <View style={styles.tile}>
            <TouchableOpacity
              style={styles.star}
              onPress={() => {
                setStar(!Star);
              }}
            >
              {Star ? (
                <Icon
                  name="star"
                  size={18}
                  style={styles.icon}
                  color={colors.noteback}
                />
              ) : (
                <Icon
                  name="star-o"
                  size={18}
                  style={styles.icon}
                  color="white"
                />
              )}
            </TouchableOpacity>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.user}>-{user}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "40%",
    alignItems: "center",
    // justifyContent: "center",
  },
  upperbar: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },
  tile: {
    padding: 55,
  },
  title: {
    position: "relative",
    textAlign: "center",
    color: "white",
    fontSize: 15,
    // alignSelf: "stretch",
  },
  user: {
    position: "absolute",
    textAlign: "right",
    paddingRight: 8,
    bottom: "20%",
    right: "20%",
    paddingRight: "10%",
    fontSize: 10,
    color: "white",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  star: {
    position: "absolute",
    top: 8,
    left: 8,
  },
});

export default NoteTile;
