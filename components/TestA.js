import React, { useState } from "react";
import SettingsAccordian from "./SettingsAccordian";


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

const TestA = ({}) => {
  const RenderSeparator = () => {
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
    
    <View style={styles.container}>
    <SettingsAccordian 
        title={"omer"}
        data={[{text:"hi",id:1}]}
    />
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#341024',
    color:'#341024',
  },
  rest:{
    paddingTop:35,
    alignItems: "center",
  },
  search:{
    paddingLeft:50,
    paddingTop:50,
    paddingBottom:25
  }
  
});

export default TestA;
