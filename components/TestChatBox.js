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
import ChatBoxBar from "./ChatBoxBar";
import ChatBox from "./ChatBox";
import { TextInput } from 'react-native-paper';





const TestChatBox = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [text, setText] = React.useState('');

  return (
    <ImageBackground
      source={require("../assets/Chat-background.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <ChatBoxBar data={{name:'Jellybean',image:require('../assets/members.png')}} />
      </View>
      <View >
      <ChatBox
         
            data={[{name: "SDS",id:1,message:'Hello Omer, How are you.....?',from:"omer"},
            {name: "Software Engineering",id:2,message:'Hello r',from:"r"},
            {name: "Network Security",id:3,message:'Woah woah',from:"omer"},
            {name: "Advanced Programming",id:4,message:'Musti enters',from:"or"},
            {name: "Theory of Automata",id:5,message:'Goodbye',from:"omer"}]
        
             }
             style={{position:'relative'}}
             />
             </View>
             <View style={styles.send}>
    
        {/* <Icon name="link" size={20} color="white" style={{marginTop:10,marginLeft:15,marginBottom:5}}/> */}
                        <TextInput
                        style={styles.Input}
                        // label="Send message here"
                        value={text}
                        onChangeText={text => setText(text)}
                        multiline
                        selectionColor='white'
                        placeholder="Send Message" 
                        placeholderTextColor="#FFF"
                        // Flat= "false"
                        />
                        <Image source={require('../assets/next.png')} style={styles.next}/>
                    </View>
                    
  
       
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    send:{
        position: 'absolute',
        left: "5%",
        bottom:'5%',
        flexDirection:'row'
    },
    Input:{
        borderWidth: 1,
        width: "85%",
        height:55,
        backgroundColor: "#26272C",
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
        borderRadius:20,
        color:"#FFFFFF",
    },
    next:{
        height: 25,
        width:25,
        alignSelf:'center',
        left:"15%",
        borderRadius: 100/ 2,
        height:30,
        width:30,
        borderColor:'#26272C',
        backgroundColor:'#26272C'
      },
 input:{
        fontSize: 18,
        bottom:'35%',
        left:'20%',
        color:"white",
       
        position:'absolute'
       
     
 },
  container: {
    paddingTop: 20,
    justifyContent: "center",
    position:'relative'
  },
  upperbar: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 20,
    
  },
  search: {
    position: "absolute",
    width: "50%",
    borderRadius: 30,
    backgroundColor: "#26272C",
    left: "10%",
  },
  btn: {
    position: "absolute",
    fontSize: 18,
    width: "21%",
    height: 50,
    backgroundColor: "#26272C",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    paddingTop: 12,
    left: "65%",
    flexDirection:'row'
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
 
});
export default TestChatBox;
