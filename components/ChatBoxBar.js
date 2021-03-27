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



const ChatBoxBar = ({ data }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
      <View>
      <View style={styles.container}>
        <View style={styles.upperbar}>
          
          <TouchableOpacity
            onPress={() => {
              console.log("going back");
            }}
            style={styles.bar}
          >
           <Image source={require('../assets/back-arrow.png')} style={styles.image} />
           <Text style={styles.text}>
               {data.name}
           </Text>
          </TouchableOpacity>
          <Image source={data.image} style={styles.user} />
        </View>
        
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    paddingTop: 20,
    justifyContent: "center",
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
    height: 25,
    width:25,
    alignSelf:'center',
    right:20,
    position:'absolute',
    height: 35,
    width:35,
    alignSelf:'center',
    borderRadius: 400/ 2,
    borderColor:'#26272C',
    backgroundColor:'#26272C'
      
  }
});
export default ChatBoxBar;
