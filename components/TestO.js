import React, { useState } from "react";
import CollabText from "./CollabText";
import Homebar from "./Homebar";
import Invite from "./Invite";

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

const TestO = ({}) => {
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
    <Homebar />
    
    <RenderSeparator />
    <View style={styles.rest}>

    <CollabText
      data={[{name: "SDS",id:1},
    {name: "Software Engineering",id:1},
    {name: "Network Security",id:1},
    {name: "Advanced Programming",id:1},
    {name: "Theory of Automata",id:1}]
        
      }
    />
    </View>
     <RenderSeparator />
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#341024',
    
    
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

export default TestO;
