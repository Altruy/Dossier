import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const CreateTasks = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Notification-background.png")}
      style={styles.image}
    >
      <View style={styles.block}>
        <View style={styles.fblock}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.assignee}> Add Assignee</Text>
            <Icon
              name="person-add-sharp"
              size={25}
              color="white"
              style={styles.icon}
            />
          </View>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.sblock}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.deadline}> Add Deadline</Text>
            <Icon2
              name="calendar-range"
              size={25}
              color="white"
              style={styles.icon}
            />
          </View>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.tblock}>
          <Text style={styles.desc}> Add Description</Text>
          <TextInput style={styles.dinput} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.btn}
      >
        <Text style={styles.textbtn}>Create Note</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

CreateTasks.navigationOptions = {
  headerTitle: "Create Tasks",
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "black",
    opacity: 0.5,
    padding: 8,
    borderRadius: 8,
    margin: 10,
    width: "75%",
  },
  dinput: {
    borderWidth: 1,
    backgroundColor: "black",
    opacity: 0.5,
    padding: 8,
    borderRadius: 8,
    margin: 10,
    width: "75%",
    height: "40%",
  },
  assignee: {
    color: "white",
  },
  deadline: {
    color: "white",
  },
  desc: {
    color: "white",
  },
  block: {
    top: "20%",
    left: "10%",
  },
  sblock: {
    top: "5%",
  },
  tblock: {
    top: "10%",
  },
  btn: {
    position: "relative",
    left: "40%",
    top: 15,
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "25%",
    height: "8%",
  },
  textbtn: {
    color: "white",
    top: "30%",
    left: "12%",
  },
  icon: {
    left: 190,
  },
});

export default CreateTasks;
