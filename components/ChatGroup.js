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

export default ChatGroup = ({ navigation, data }) => {
  const [showInfo, setShowInfo] = useState(true);
  const {username} = useAuth()
  return (
  <View>
    {(
    <FlatList
      data={data}
      renderItem={({ item }) => {
          if (item.from === username){
              return (<View style={styles.btn2}> 
              <Text style={styles.text}>
                  {item.message}
              </Text>
              </View>)
          }
          else{
              return (<View style={{flexDirection:'row'}}>
              <Image 
                source={{
                  uri: 'https://robohash.org/'+item.from,
                }} 
                style={styles.image}
            />
              <View style={styles.btn1}> 
              <Text style={styles.name}>{item.from}</Text>
              <Text style={styles.text}>
                  {item.message}
              </Text>
              </View>
              </View>)
          }
        
      }}
      
      keyExtractor={(item,i) => i.toString()}
    />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
    name:{
      color:"white",
      position:'absolute',
      left:"45%",
    },
    btn1: {
     
        fontSize: 18,
        width: "55%",
        backgroundColor: "#26272C",
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 2,
        paddingTop: 20,
        paddingBottom:10,
        left:'35%',
        marginBottom:20,
       
      },
      btn2: {
     
        fontSize: 18,
        width: "55%",
        backgroundColor: "#26272C",
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 2,
        paddingTop: 12,
        paddingBottom:10,
        left:'40%',
        marginBottom:20,
        
      },
 
  text:
  {
    
    color : 'white',
    fontSize: 16,
    marginRight:50,
    left:"10%"
  },
  image:{

    alignSelf:'center',
    left:20,
    height: 35,
    width:35,
    borderRadius: 400/ 2,
    borderColor:'#26272C',
    backgroundColor:'#26272C',
    paddingRight:15
  }
 
});
