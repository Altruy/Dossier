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
//import { TextInput } from 'react-native-paper';
import { Header } from 'react-navigation-stack'
import {KeyboardAvoidingView, Platform,} from "react-native";
import {useAuth} from '../../auth_providers/Auth'
import {getChat, addChat} from '../../API'
import TopBar from "../../components/TopBar";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'


const delay = (seconds) => 
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))


const  Chatbox = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [text, setText] = React.useState('');
  const [data , setdata] = useState([])
  const user = navigation.getParam('user')
  const { collabId, username , realm} = useAuth()

  useEffect(() => {
    refresh()
  }, [])

  const refresh = async ()=>{
    getChat(collabId,username,user).then((res)=>setdata(res))
    await delay (15)
    refresh()
  }

  const handleSend=()=>{
    if(!!text){
      addChat(collabId,text,user,username).then(()=>{
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
        <ChatBoxBar navigation={navigation} data={{name:user,image:{
                    uri: 'https://robohash.org/'+user,
                  }}} />
      </View>
      <ScrollView >
      <ChatBox
         
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
  input:
  {
    fontSize: 18,
    bottom:'35%',
    left:'20%',
    color:"white",
    
    position:'absolute'
       
     
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
export default Chatbox;
