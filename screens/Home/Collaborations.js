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

const delay = (seconds) => 
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))


const Collaboration = ({navigation}) => {
  const [data, setData] = useState([])
  const { username , setCollabId , collabId , colname , setColname} = useAuth();
  const [all, setall] = useState(true)
  let temp ;

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

  const collabs = async () => getCollabs(username).then((vals)=>setData(vals));

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
          marginLeft: "4.5%",
          opacity: 0.2,
        }}
      />
    );
  };
  return (
    
    <View style={styles.container}>
    <Homebar navigation={navigation}/>
    <View style={{marginTop:25}}></View>
    <RenderSeparator />
    <View style={styles.rest}>

    <CollabText
      data={data}
      setCollabId={setCollabId}
      setColname ={setColname}
      navigation = {navigation}
    />
    </View>
    
    <View style={{marginTop:25}}></View>
     <RenderSeparator />
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#341024'
  },
  rest:{
    paddingTop:25,
    alignItems: "center",
  },
  search:{
    paddingLeft:50,
    paddingTop:50,
    paddingBottom:25,
  }
  
});

export default Collaboration;
