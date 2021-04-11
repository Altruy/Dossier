import React , {useState , useEffect} from "react";
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
  TextInput
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

import ChatBoxBar from "../../components/ChatBoxBar";
import ChatBox from "../../components/ChatBox";
import ChatGroup from "../../components/ChatGroup";
import {useAuth} from '../../auth_providers/Auth'
import {getGroup, addGroup} from '../../API'

import {KeyboardAvoidingView, Platform,} from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import TopBar from "../../components/TopBar";

const delay = (seconds) => 
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))



const TestGroupChat = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data , setdata] = useState([])
  const [text, setText] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const { collabId, username , realm} = useAuth()

  useEffect(() => {
    refresh()
  }, [])

  const refresh = async ()=>{
    getGroup(collabId).then((res)=>setdata(res))
    await delay(15);
    refresh()
  }

  const handleSend=()=>{
    if(!!text){
      addGroup(collabId,text,username).then(()=>{
        setText('')
        refresh()
      })
    }
  }


  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-500} behavior="padding" >
    <ImageBackground
      source={require("../../assets/Chat-background.png")}
      style={styles.image}
    >
       <View >
        <ChatBoxBar navigation={navigation} data={{name:'Group Chat'}} />
      </View> 
     
      <ScrollView >
      <ChatGroup
         navigation={navigation}
            data={data}
             style={{position:'relative'}}
             />
             </ScrollView>
            
             <View style={styles.container}>
            <View style={styles.mainContainer}>
            <Entypo name="attachment" size={24} color="white" style={styles.icon} />
              <TextInput
                placeholder={"Type a message"}
                style={styles.textInput}
                multiline
                placeholderTextColor="#FFF"
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            <TouchableOpacity style={styles.next} onPress={()=>handleSend()}> 
        <MaterialIcons name="send" size={30} color="white" style={styles.nexts} />
      </TouchableOpacity>
           
          </View>     
                    
                    
                    
    </ImageBackground>
    </KeyboardAvoidingView>
   
  );
};

const styles = StyleSheet.create({
  
 container: {
  flexDirection: 'row',
  margin: 10,
  alignItems: 'flex-end',
},
mainContainer: {
  flexDirection: 'row',
  backgroundColor: "#26272C",
  height:50,
  borderRadius: 25,
  marginRight: 10,
  flex: 1,
  alignItems: 'center',
},
textInput: {
  flex: 1,
  marginHorizontal: 10,
  backgroundColor:"#26272C",
  color:'white',
  borderRadius: 25,
  textAlignVertical:'center'
  //height:50
},
nexts:{
  left:2
},
next:{
  height: 50,
  width:50,
  alignSelf:'center',
  borderRadius: 100/ 2,
  borderColor:'#26272C',
  backgroundColor:'#26272C',
  marginRight:10,
  alignItems:'center',
  justifyContent: 'center',
},
    icon: {
      marginHorizontal: 15,
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
export default TestGroupChat;
