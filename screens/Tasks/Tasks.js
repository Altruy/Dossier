import React , {useEffect} from "react";
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
} from "react-native";
import TopBar from "../../components/TopBar";
import TaskNav from "../../navigation/TaskNav";

const Tasks = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Notification-background.png")}
      style={styles.image}
    >
      <TopBar navigation={navigation} title={'Tasks'} />
      <TaskNav/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
  },
});
export default Tasks;
