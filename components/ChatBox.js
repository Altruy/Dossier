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

export default ChatBox = ({ data }) => {
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
                    return (<View style={styles.btn1}> 
                    <Text style={styles.text}>
                        {item.message}
                    </Text>
                    </View>)
                }
             
            }}
            
            keyExtractor={(item) => item.id}
          />
        )}
        </View>
  );
};

const styles = StyleSheet.create({
    btn1: {
     
        fontSize: 18,
        width: "65%",
        backgroundColor: "#26272C",
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 2,
        paddingTop: 12,
        paddingBottom:10,
        left:'7%',
        marginBottom:20,
        position:'relative'
      },
      btn2: {
     
        fontSize: 18,
        width: "65%",
        backgroundColor: "#26272C",
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 2,
        paddingTop: 12,
        paddingBottom:10,
        left:'29%',
        marginBottom:20,
        position:'relative'
      },
 
  text:
  {
    
    color : 'white',
    fontSize: 16,
    marginRight:50,
    left:"10%"
  },
  
 
});
