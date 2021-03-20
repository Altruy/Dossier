import React, { useState } from "react";
import CollabText from "./CollabText";
import Search from "./Search.js"
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

class Homebar extends React.Component {
  RenderSeparator = () => {
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
  render(){
    return (
    
        <View style={styles.overall}>
        <View style={styles.search}>
        <Search />
        </View >
        <View style={styles.join}>
        <TouchableOpacity
                style={styles.button}
                onPress={() => console.log(data)}
              >
          
            <Text style={styles.text}>Join</Text>
                  <Image 
                  source={require('../assets/add_link.png')} 
                  style={styles.link} 
                  />
              </TouchableOpacity>
        </View>
        <View style={styles.new}>
        <TouchableOpacity
                style={styles.button}
                onPress={() => console.log(data)}
              >
          
            <Text style={styles.text}>New</Text>
                  <Image 
                  source={require('../assets/add.png')} 
                  style={styles.add} 
                  />
              </TouchableOpacity>
        </View>
      </View>
        
        
      );
  }
  
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
  join:{
    paddingTop:40
  },
  search:{
    paddingLeft:40,
    paddingTop:50,
    paddingBottom:25
  },
  new:{
    paddingRight:25,
    paddingTop:40

  },
  button: {
      
    flexDirection: 'row',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 2,
    borderRadius: 75,
    borderWidth:10,
    borderLeftWidth:10,
    borderColor:"rgba(0, 0, 0, 0.5)",
    marginVertical:7,
    justifyContent: 'space-between',
    width:100,
  },
  text:
  {
    paddingLeft:5,
    color : 'white',
    justifyContent: 'space-between',
    fontSize: 20,
    alignContent:'center',
  },
  link:{
   
    height: 28,
    width:28,
    marginVertical:3,
    
  },
  add:{
    paddingVertical:10,
    height: 10,
    width:10,
    marginVertical:5,
    justifyContent:'flex-end',
    paddingRight:20,
    paddingTop:10
    
  },
  overall:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  
});

export default Homebar;
