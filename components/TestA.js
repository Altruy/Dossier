import React, { useState } from "react";
import SettingsAccordian from "./SettingsAccordian";

import data from "../data/settings-data";
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
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <SettingsAccordian data={item}  />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={RenderSeparator}
          ListFooterComponent={<View style={{ height: 20 }} />}
          style={styles.fl}
        />
      </View>   
   
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  fl: {
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
   
    
    backgroundColor:'#341024',
    color:'#341024',
    
    overflow: "hidden",
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
