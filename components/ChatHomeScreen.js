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

export default ChatHomeScreen = ({ title, data }) => {
  const [showInfo, setShowInfo] = useState(true);

  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "4.5%",
          opacity: 0.2,
          marginTop:5,
          marginBottom:5
        }}
      />
    );
  };

  return (
    
  <View>
         {(
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.container}
                onPress={() => console.log(item.id)}
              >
            <Image 
                  source={item.image} 
                  style={styles.image}
                  />
            <Text style={styles.text}>{item.name}</Text>
                  <Image 
                  source={require('../assets/next.png')} 
                  style={styles.ImageIconStyle} 
                  />
                   <Image 
                  source={require('../assets/chat.png')} 
                  style={styles.chaticon} 
                  />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={RenderSeparator}
            keyExtractor={(item) => item.id}
          />
        )}
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginVertical:7,
  },
  text:
  {
    
    color : 'white',
    fontSize: 16,
    alignSelf:'center',
    marginRight:100,
    left:"35%"
  },
  image:{
    height: 35,
    width:35,
    alignSelf:'center',
    left:"15%",
    borderRadius: 400/ 2,
    borderColor:'#26272C',
    backgroundColor:'#26272C'
  },
  ImageIconStyle:{

    height: 20,
    width:20,
    alignSelf:'center',
    right:5,
    position:'absolute'
  
  },
  chaticon:{
    height: 25,
    width:25,
    alignSelf:'center',
    right:40,
    position:'absolute'
  },
});
