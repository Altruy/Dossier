import React, { useState } from "react";
import CollabText from "./CollabText";
import Search from "./Search.js"
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { Searchbar } from "react-native-paper";
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
  Clipboard
} from "react-native";
import {joinCollab,newCollab} from '../API'
import {useAuth} from '../auth_providers/Auth'
import { Alert } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
const Homebar = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [show,setShowState] = useState(false)
    const [show2,setShowState2] = useState(false)
    const [newN, setnew] = useState('')
    const [collab,setcollab]=useState("")
    const [newId, setnewId] = useState('')
    const { username,collabId,colname } = useAuth()
    
    const onChangeSearch = (query) => setSearchQuery(query);

    const handleJoin = () =>{
      if(!collab){
        Alert.alert("Enter a valid Collab ID")
      }
      else{
        joinCollab( collab , username )
        addNotif(collabId,username,`${username} joined ${colname}`)
        Alert.alert("Joining Collaboration...")
        navigation.replace('Collabs')
      }
    }

    const handleNew = async () =>{
      if(!newN){
        Alert.alert("Enter a valid Name")
      }
      else{
        let a = await newCollab(newN,username)
        setnewId(a);
        Alert.alert("Created new Collaboration")
      }
    }
    const handleBack =  () =>{
      navigation.replace('Collabs')
    }

    const handleCopy =()=>{
      Clipboard.setString(collab)
      Alert.alert('Collab Id copied to clipboard')
  }

    return (
        <View style={styles.container}>
          <View style={styles.upperbar}>
            <Searchbar
              style={styles.search}
              placeholder="Search"
              iconColor="white"
              placeholderTextColor="white"
              onChangeText={onChangeSearch}
              value={searchQuery}
              onPress={()=>console.log('pressed')}
            />
             <TouchableOpacity
              onPress={() => setShowState(true)}
              style={styles.join}
            >
              <Text style={styles.text}>
                Join
              </Text>
              <Icon name="link" size={19} color="white" style={styles.joinico} />
            </TouchableOpacity>
            <Modal animationType="fade" transparent={true} visible ={show} navigation={navigation}>
            <TouchableOpacity 
              activeOpacity={1} 
              style={{height:'100%',width:'100%'}}  
              onPress={() => setShowState(false)}>
            <View style ={{ backgroundColor:"rgba(52, 52, 52, 0.8)", flex:1}}>
            <View style={styles.modal}>
                <View style={styles.modaltext}>
                  <Text style={styles.text2}>Join Collaboration</Text>
                  <Icon2 style={styles.cross} name="times" size={30} color="white" 
                    onPress={() => setShowState(false)} />
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.link}> Collab ID : </Text>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "white"
                    autoCapitalize = "none"
                    onChangeText = {(text) => setcollab(text)}/>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => handleJoin()}
                    style={styles.invite}
                  >
                    <Text style={styles.joinbuton}>
                        Join  
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
            </View>
            </TouchableOpacity>
            </Modal>
            <TouchableOpacity
              onPress={() => setShowState2(true)}
              style={styles.btn}
            >
              <Text style={styles.text}>
                New
              </Text>
              <Icon name="add" size={20} color="white" style={styles.plus} />
            </TouchableOpacity>
            <Modal animationType="fade" transparent={true} visible ={show2} navigation={navigation}>
            <TouchableOpacity 
              activeOpacity={1} 
              style={{height:'100%',width:'100%'}}  
              onPress={() => setShowState2(false)}>
            <View style ={{ backgroundColor:"rgba(52, 52, 52, 0.8)", flex:1}}>
            <View style={styles.modal}>
                <View style={styles.modaltext}>
                  <Text style={styles.text2}>Create Collaboration</Text>
                  <Icon2 style={styles.cross} name="times" size={30} color="white" 
                    onPress={() => handleBack()} />
                </View>
                <View >
                    <Text style={styles.link2}> Collab Name : </Text>
                    <TextInput style = {styles.input2}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "white"
                    autoCapitalize = "none"
                    onChangeText = {(text) => setnew(text)}/>
                </View>
                <View>
                  {! newId && <TouchableOpacity
                    onPress={() => handleNew()}
                    style={styles.invite}
                  >
                    <Text style={styles.joinbuton}>
                        Create  
                    </Text>
                  </TouchableOpacity>}
                  {!! newId &&
                  <TouchableOpacity style={styles.email} onPress={()=>handleCopy()}>
                      <Text style={styles.link2}>Link: </Text>
                      <Text
                          style={styles.input3}
                          autoCapitalize="none"
                      >{newId}
                      </Text>
                      <Feather
                              name="copy"
                              color="white"
                              size={18}
                              style={styles.copy}
                          />
                  </TouchableOpacity>}
                </View>
            </View>
            </View>
            </TouchableOpacity>
            </Modal>
          </View>
        </View>
    );
  };
const styles = StyleSheet.create({
    link:{
        color: "white",
        fontSize: 18,
        left:"40%",
        paddingRight:25,
        top:'1%'
    },
    invite:{
      // position: "absolute",
      fontSize: 18,
      width: "35%",
      height: 40,
      //backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderWidth: 1,
      borderRadius: 30,
      paddingLeft: 10,
      paddingTop: 12,
      left: "33%",
      color:"white",
      borderColor:"white",
      paddingBottom:15,
      justifyContent:"center",
      marginTop:'6%'
    },
    cancel:{
      position: "absolute",
      paddingTop: 25,
      left: "70%",
      paddingLeft:30,
    },
    input: {
      marginBottom:15,
      paddingBottom:10,
      height: 35,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius:10,
      width:210,
      color:"white",
      paddingLeft:10,
      justifyContent:"center"
     },
     link2:{
      color: "white",
      fontSize: 18,
      left:"10%",
      paddingRight:25,
  },
     input2: {
      left:"15%",
      top:'15%',
      marginBottom:15,
      paddingBottom:10,
      height: 35,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius:10,
      width:'70%',
      color:"white",
      paddingLeft:10,
      justifyContent:"center"
     },
    modaltext:{
      paddingBottom:20,
      //left:"33%",
      paddingTop:25,
      alignContent:"center",
      flexDirection:"row",
      color:"white",
      justifyContent:'center'
    },
    modal:{
      backgroundColor:"#1F0915",
        marginLeft:'7%',
        borderRadius:40,
        marginTop:190,
        alignContent:"center"  ,
        justifyContent:'center',
        width:'85%',  
        height:300
    },
    entire: {
        width: "100%",
        height: "100%",
      },
      container: {
        paddingTop: 20,
        justifyContent: "center",
        justifyContent: 'space-between'
      },
      upperbar: {
        flex: 1,
        paddingTop: 60,
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 10,
      },
      search: {
        position: "absolute",
        width: "30%",
        borderRadius: 30,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        left: "9%",
        paddingRight:0
      },
      join: {
        position: "absolute",
        fontSize: 18,
        width: "22%",
        height: 50,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 30,
        paddingLeft: 10,
        paddingTop: 12,
       left : "42%",
       justifyContent:'space-between',
      },
      btn: {
        position: "absolute",
        fontSize: 18,
        width: "22%",
        height: 50,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 10,
        paddingTop: 12,
        left: "67%",
      },
      text: {
        paddingLeft:'9%',
        color: "white",
        fontSize: 18,
      },
      text2: {
        top:'-10%',
        color: "white",
        fontSize: 22,
      },
      fl: {
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 30,
      },
      image: {
        // flex: 1,
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        overflow: "hidden",
      },
      plus:{
        position:'absolute',
        right:'10%',
        top:'38%'
      },
      joinico:{
        position:'absolute',
        right:'17%',
        top:'38%'
      },
      joinbuton:{
        color:'white',
        paddingLeft:'30%'
      },
      cross: {
        position: "absolute",
        top: '-37%',
        right: "10%",
      },
      textInput: {
        paddingLeft: 10,
        // paddingRight: 10,
        paddingVertical: 10,

        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        color: 'white',
        width: '68%',
    },
    email: {
      marginTop:'8%'
      // textDecorationColor: 'white',
  },
  copy:{
    position:'absolute',
    top:'57%',
    right:'18%'
},
textStyle: {
  color: 'white',
  fontSize: 15,
  textAlign: 'center',
  textAlignVertical: 'center',
  paddingLeft: 50,
},
input3: {
  left:"15%",
  top:'15%',
  marginBottom:15,
  paddingBottom:10,
  height: 35,
  borderColor: 'white',
  borderWidth: 1,
  borderRadius:10,
  width:'70%',
  color:"white",
  paddingLeft:10,
  paddingTop:'2%',
  justifyContent:"center"
 },
});

export default Homebar;