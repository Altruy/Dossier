import React, { useState } from "react";
import CollabText from "./CollabText";
import Search from "./Search.js"
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
  KeyboardAvoidingView,
  Clipboard
} from "react-native";
import {addNotif, joinCollab,newCollab} from '../API'
import {useAuth} from '../auth_providers/Auth'
import { Alert } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { Dimensions } from 'react-native';
import TopBar from './HomeTop'
const h = Dimensions.get('window').height;
const Homebar = ({ navigation ,  show , setShowState , show2 , setShowState2 ,searchQuery , onChangeSearch }) => {

    const [newN, setnew] = useState('')
    const [collab,setcollab]=useState("")
    const [newId, setnewId] = useState('')
    const { username,collabId,colname } = useAuth()
    

    const handleJoin = () =>{
      if(collab.length==0){
        Alert.alert("Enter a valid Collab ID")
      }
      else if (collab.includes(' ')){
        Alert.alert('Collab id cannot contain spaces')
      }
      else{
        joinCollab( collab , username )
        addNotif(collabId,username,`${username} joined ${colname}`)
        Alert.alert("Request to join Collaboration sent...")
        navigation.replace('Collabs')
      }
    }

    const handleNew = async () =>{
      if(!newN){
        Alert.alert("Enter a valid Name")
      }
      else if (newN[0] === ' '){
        Alert.alert('Name cannot start with an empty space')
      }
      else if (newN.length >15){
        Alert.alert('Name too long, only 15 characters allowed')
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
      Clipboard.setString(newId)
      Alert.alert('Collab Id copied to clipboard')
  }

    return (
        <View style={styles.container}>
          <TopBar title={'Collaborations'} navigation={navigation}/>
          <View style={styles.upperbar}>
            <Searchbar
              style={styles.search}
              placeholder="Search"
              iconColor="white"
              color="white"
              onChangeText={onChangeSearch}
              value={searchQuery}
              onPress={()=>console.log('pressed')}
            />
             
            <Modal animationType="fade" transparent={true} visible ={show} navigation={navigation}>
            <TouchableOpacity 
              activeOpacity={1} 
              style={{height:'100%',width:'100%'}}  
              onPress={() => setShowState(false)}>
            <View style ={{ backgroundColor:"rgba(52, 52, 52, 0.8)", flex:1}}>
            <View style={styles.modal}>
                <View style={styles.modaltext}>
                  <Text style={styles.text2}>Join Collaboration</Text>
                  <Icon2 style={styles.cross} name="times" size={25} color="white" 
                    onPress={() => setShowState(false)} />
                </View>
                <View style={{flexDirection:"row",justifyContent:'center'}}>
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
            
            <Modal animationType="fade" transparent={true} visible ={show2} navigation={navigation}>
            <TouchableOpacity 
              activeOpacity={1} 
              style={{height:'100%',width:'100%'}}  
              onPress={() => 
                navigation.replace('Collabs')}>
            <View style ={{ backgroundColor:"rgba(52, 52, 52, 0.8)", flex:1}}>
            <View style={styles.modal}>
                <View style={styles.modaltext}>
                  <Text style={styles.text2}>Create Collaboration</Text>
                  <Icon2 style={styles.cross} name="times" size={25} color="white" 
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
    top:{
      backgroundColor: "rgba(0,0,0,0.65)",
      alignItems: "center",

      flexDirection:'row',
      height:60,
    },
    link:{
        color: "white",
        fontSize: 16,
        paddingRight:15,
        top:'2%'
    },
    topt:{
      color:'white',
      fontSize:20,
    },
    invite:{
      // position: "absolute",
      width: "35%",
      height: 40,
      backgroundColor: "white",
      borderRadius: 30,
      left: "33%",
      justifyContent:"center",
      marginTop:'7%'
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
      marginRight:10,
      height: 35,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius:10,
      width:190,
      color:"white",
      justifyContent:"center",
      fontSize: 13
     },
     link2:{
      color: "white",
      fontSize: 16,
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
      //left:"33%",
      paddingTop:25,
      alignContent:"center",
      flexDirection:"row",
      color:"white",
      justifyContent:'center'
    },
    modal:{
      backgroundColor:"black",
      position:'absolute',
        borderRadius:40,
        alignContent:"center"  ,
        justifyContent:'center',
        alignSelf:'center',
        width:'85%',  
        height:260,
        bottom:'30%'
  
    },
    entire: {
        width: "100%",
        height: "100%",
      },
      container: {
        justifyContent: "center",
        justifyContent: 'space-between',
        zIndex:2
      },
      upperbar: {
        width:'100%',
        marginBottom: "5%",
        marginTop:'10%',
        flexDirection: "row",
        justifyContent:'center'
      },
      search: {
        width: "55%",
        height:45,
        borderRadius: 30,
        backgroundColor: "rgba(0,0,0,0.50)"
      },
      join: {
        position: "absolute",
        fontSize: 16,
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
        position:'absolute',
        fontSize: 15,
        width: 60,
        height: 60,
        backgroundColor: '#6508B5',
        borderRadius: 50,
        top:h-280,
        right:'10%',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
      },
      btnp: {
        position:'absolute',
        fontSize: 15,
        width: 60,
        height: 60,
        backgroundColor: '#B100FF',
        borderRadius: 50,
        top:h-200,
        right:'10%',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
      },
      text: {
        paddingLeft:'9%',
        color: "white",
        fontSize: 16,
      },
      text2: {
        top:'-10%',
        color: "white",
        fontSize: 20,
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
        color:'black',
        textAlign:'center'
      },
      cross: {
        // position: "absolute",
        top: '-10%',
        right: "10%",
        left:'130%'
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
  marginBottom:20,
  height: 35,
  borderColor: 'white',
  borderWidth: 1,
  borderRadius:10,
  width:'70%',
  color:"white",
  paddingLeft:10,
  justifyContent:"center",
  fontSize:13,
  textAlignVertical:'center'
 },
});

export default Homebar;