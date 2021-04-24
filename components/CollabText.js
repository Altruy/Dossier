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
import { ScrollView } from "react-native-gesture-handler";

export default CollabText = ({ navigation , setCollabId, data ,setColname}) => {

  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "6%",
          opacity: 0.2,
        }}
      />
    );
  };

  return (
    <ScrollView style={{height:'66.5%'}} > 
      <View>
  
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  setCollabId(item.collab);
                  setColname(item.name)
                  navigation.navigate('Home');
                }}
              >
          
            <Text style={styles.text}>{item.name}</Text>
                  <Image 
                  source={require('../assets/next.png')} 
                  style={styles.ImageIconStyle} 
                  />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={RenderSeparator}
            keyExtractor={(item) => item.collab}
          />
        
        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '90%',
        borderRadius: 25,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        justifyContent:'space-between',
        alignSelf:'center'
    
  },
  text:
  {
    paddingLeft:15,
    color : 'white',
    fontSize: 16,
    alignSelf:'center'
  },
  ImageIconStyle:{

    height: 20,
    width:20,
    alignSelf:'center',
    marginRight:15,
    paddingBottom:5
  
  }
});
