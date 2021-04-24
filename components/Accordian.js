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
  FlatList,
} from "react-native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default Accordian = ({ title, data }) => {
  const [showInfo, setShowInfo] = useState(false);

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "4.5%",
          opacity: 0.2,
        }}
      />
    );
  };

  return (
    <TouchableOpacity
      style={styles.accordian}
      onPress={() => setShowInfo(!showInfo)}
    >
      <View style={styles.box}>
        <View style={styles.dropdown}>
          <Text style={styles.title}>{title}</Text>
          {showInfo ? (
            <Icon name="angle-up" size={20} style={styles.icon} color="white" />
          ) : (
            <Icon
              name="angle-down"
              size={20}
              style={styles.icon}
              color="white"
            />
          )}
        </View>

        {showInfo && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text style={styles.answer}>{item.text}</Text>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.homeback,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    width: "100%",
  },
  dropdown: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  box: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "90%",
    borderRadius: 15,
  },
  title: {
    alignItems: "flex-start",
    color: "white",
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
  answer: {
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom: 7,
    color: "white",
    fontSize: 14,
  },
  icon: {
    position: "absolute",
    right: 10,
  },
  accordian: {
    width: "100%",
    alignItems: "center",
  },
});
