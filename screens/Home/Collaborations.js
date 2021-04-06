import React, { useState,useEffect } from "react";
import CollabText from "../../components/CollabText";
import Homebar from "../../components/Homebar";
import Invite from "../../components/Invite";
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
import { getCollabs } from "../../API";

const Collaboration = ({navigation}) => {
  const [data, setData] = useState([])
  const { username , setCollabId , signOut } = useAuth();

  useEffect(() => {
    collabs();
  }, [])

  const collabs = async () => getCollabs(username).then((vals)=>setData(vals));

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
    
    <RenderSeparator />
    <View style={styles.rest}>

    <CollabText
      data={data}
      setCollabId={setCollabId}
      navigation = {navigation}
    />
    </View>
     <RenderSeparator />
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#341024',
    
    
  },
  rest:{
    paddingTop:35,
    alignItems: "center",
  },
  search:{
    paddingLeft:50,
    paddingTop:50,
    paddingBottom:25,
  }
  
});

export default Collaboration;
