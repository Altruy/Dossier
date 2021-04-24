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
import {useAuth} from '../auth_providers/Auth'

export default ChatHomeScreen = ({ navigation, data }) => {
  const [showInfo, setShowInfo] = useState(true);
  const {username} = useAuth()

  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%",
          opacity: 0.2,
          marginTop:5,
          marginBottom:5
        }}
      />
    );
  };

  return (
    
  <View>
    <TouchableOpacity
        style={styles.container2}
        onPress={() => navigation.navigate('ChatGroup')}
      >
   
        
        <Text style={styles.text}>Group Chat</Text>
        <Image 
        source={require('../assets/next.png')} 
        style={styles.ImageIconStyle} 
        />
 
      </TouchableOpacity>
      {RenderSeparator()}
         {(
          <FlatList
            data={data}
            renderItem={({ item }) => <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Chatbox',{
                  user:item.username
                })}
              >
                <Image 
                  source={{
                    uri: 'https://robohash.org/'+item.username,
                  }} 
                  style={styles.image}
                  />
                {username === item.username && <Text style={styles.text}>{item.username} (Me)</Text>}
                {username !== item.username && <Text style={styles.text}>{item.username}</Text>}
                <Image 
                source={require('../assets/next.png')} 
                style={styles.ImageIconStyle} 
                />
                {/* <Image 
                source={require('../assets/chat.png')} 
                style={styles.chaticon} 
                /> */}
              </TouchableOpacity>
            }
            ItemSeparatorComponent={RenderSeparator}
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
  container2: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginVertical:7,
    height:70
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
    height: 60,
    width:60,
    alignSelf:'center',
    borderRadius: 400/ 2,
    borderColor:'#26272C',
    backgroundColor:'#26272C'
  },
  ImageIconStyle:{

    height: 20,
    width:20,
    alignSelf:'center',
    right:'5%',
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
