import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";

import { DrawerNavigatorItems, DrawerItemList } from "react-navigation-drawer";

export default SideBar = (props) => (
  <ScrollView style={styles.full}>
    <View style={styles.header}>
      <Text style={styles.title}>Collaboration</Text>
    </View>
    <View
      style={{
        top: "10%",
        height: 2,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "10%",
        opacity: 0.2,
      }}
    />
    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
    <View
      style={{
        top: "20%",
        height: 2,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "10%",
        opacity: 0.2,
      }}
    />
    <View style={styles.bottom}>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: "10%",
          justifyContent: "space-between",
          marginRight: 10,
        }}
      >
        <Text style={styles.opt}>Members</Text>
        <Icon name="person-search" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Settings")}
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: "10%",
          justifyContent: "space-between",
          marginRight: 10,
        }}
      >
        <Text style={styles.opt}>Settings</Text>
        <Icon2 name="settings-sharp" size={30} color="white" />
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  full: {
    backgroundColor: "#1f1f1f",
  },
  header: {
    paddingTop: "20%",
    marginLeft: "10%",
  },
  opt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottom: {
    marginTop: "50%",
    paddingLeft: "10%",
  },
  title: {
    top: "40%",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    top: "10%",
    flex: 1,
    paddingLeft: "5%",
    height: 400,
  },
});
