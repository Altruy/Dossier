import React, { useState,useEffect } from "react";
import CollabText from "../../components/CollabText";
import Homebar from "../../components/Homebar";
import {useAuth} from '../../auth_providers/Auth'
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
} from "react-native";
import { getCollabs,getNotifCount } from "../../API";
import {  notify } from "../../PushNotif";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dimensions } from 'react-native';
const h = Dimensions.get('window').height;
import Icon from "react-native-vector-icons/Ionicons";


const delay = (seconds) => 
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))


const Collaboration = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [fil, setfil] = useState([])
  const { username , setCollabId , collabId , colname , setColname , user} = useAuth();
  const [all, setall] = useState(true)
  const [show,setShowState] = useState(false)
  const [show2,setShowState2] = useState(false)
  let temp ;
  const onChangeSearch = (query) => {
    setSearchQuery(query)
    setfil(data.filter((val)=>val.name.toLowerCase().includes(query.toLowerCase())))
}

  useEffect(() => {
    collabs();
  }, [])

  useEffect(() => {
    if(!!collabId){
      refresh()
    }
  }, [collabId])



  const refresh = () =>{
    AsyncStorage.getItem(collabId).then(async (v)=>{
      if(!!v){
        let val = JSON.parse(v)
        temp = val.all
        setall(val.all)
        if(temp){
          let notifs = await getNotifCount(username,collabId)
          nots(notifs)
        }
        else{
          await delay(15)
          refresh()
        }
      }
      else{
        let notifs = await getNotifCount(username,collabId)
        nots(notifs)
      }
      
    })
  }

  const collabs = async () => getCollabs(username).then((vals)=>{
    setfil(vals)
    setData(vals)});

  const nots = async (nots) =>{
    if(nots===0 ){
      await delay(15)
      refresh()
      return;
    }
    AsyncStorage.getItem('notifs').then((v)=>{
      if(!!v){
        let val = JSON.parse(v);
        if (!!val[collabId]){
          if(val[collabId]!==nots){
            notify(`${colname} has ${nots-val[collabId]} new notifications`);
            AsyncStorage.setItem('notifs',JSON.stringify({...val,[collabId]:nots}))
          }
        }
        else {
          notify(`${colname} has ${nots} new notifications`);
          AsyncStorage.setItem('notifs',JSON.stringify({...val,[collabId]:nots}))
        }
      }
      else {
        notify(`${colname} has ${nots} new notifications`);
        AsyncStorage.setItem('notifs',JSON.stringify({[collabId]:nots}))
      }
    }).then(()=>delay(15)).then(()=>refresh())
  }

  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "7%",
          opacity: 0.2,
        }}
      />
    );
  };
  return (
    
    <View style={styles.container}>
    <Homebar 
      navigation={navigation} 
      show = {show} show2={show2}  
      setShowState ={setShowState} 
      setShowState2={setShowState2}
      searchQuery={searchQuery}
      onChangeSearch ={onChangeSearch}
      />
    <View style={{marginTop:25}}></View>
    <RenderSeparator />
    <View style={styles.rest}>
    
    <CollabText
      data={fil}
      setCollabId={setCollabId}
      setColname ={setColname}
      navigation = {navigation}
    />
    </View>
    
    <View style={{marginTop:10}}></View>
     <RenderSeparator />
     
     <TouchableOpacity
        onPress={() => setShowState(true)}
        style={styles.btn}
      >
        <Icon name="link" size={19} color="white"  />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowState2(true)}
        style={styles.btnp}
      >
        <Icon name="add" size={30} color="white"  />
      </TouchableOpacity>
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#341024'
  },
  rest:{
    paddingTop:10,
    alignItems: "center",
  },
  btn: {
    position:'absolute',
    fontSize: 15,
    width: 60,
    height: 60,
    backgroundColor: '#6508B5',
    borderRadius: 50,
    top:h - 195,
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
    top:h-120,
    right:'10%',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
});

export default Collaboration;
