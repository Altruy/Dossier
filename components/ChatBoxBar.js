import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import data from "../data/settings-data";
import ChatHomeScreen from "./ChatHomeScreen";
import {useAuth} from '../auth_providers/Auth'



const ChatBoxBar = ({ data , navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const {username} = useAuth()
  return (
      <View>
      <View style={styles.container}>
        <View style={styles.upperbar}>
          
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.bar}
          >
           <Image source={require('../assets/back-arrow.png')} style={styles.image} />
            {username === data.name && <Text style={styles.text}>{data.name} (Me)</Text>}
            {username !== data.name && <Text style={styles.text}>{data.name}</Text>}
          </TouchableOpacity>
          {!!data.image && <Image source={data.image} style={styles.user} />}
        </View>
        
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    paddingTop: 20,
    justifyContent: "center",
    marginBottom:20
  },

    bar:{
    flexDirection:'row',
    paddingBottom:15
    },
  text: {
    color: "white",
    fontSize: 20,
    alignSelf:'center',
  },
  image: {
    
    height:35,width:35,left:"10%",marginRight:25,marginLeft:15
  },
  fl: {
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 30,
    alignSelf:'center'
  },
  user:{
    height: 50,
    width:50,
    alignSelf:'center',
    right:20,
    position:'absolute',
    alignSelf:'center',
    borderRadius: 400/ 2,
    borderColor:'#26272C',
    backgroundColor:'#26272C'
      
  }
});
export default ChatBoxBar;
