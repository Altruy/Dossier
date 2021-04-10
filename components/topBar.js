import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuth } from "../auth_providers/Auth";


const TopBar = ({navigation,title}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {username , signOut , setCollabId} = useAuth()

  const handleChange = () =>{
    setModalVisible(false)
    navigation.navigate('NewPassword')
  }

  const handleSignout = () =>{
    setModalVisible(false)
    signOut()
    navigation.navigate('SignIn')
  }


  return (
    <View >
      
      <View style={styles.container}>
          <View style={styles.left}>
          <Icon
            type="ionicon"
            name="md-menu"
            color="white"
            size={35}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
          </View>
          <Text style={styles.note}> {title} </Text>
          <View style={styles.right}>
             <Icon3
            name="bell"
            color="white"
            size={30}
            
            style={{padding: 12}}
            onPress={() => navigation.navigate('Notifs')}
          />
          <Icon3
            name="home"
            color="white"
            size={30}
            
            style={{padding: 12}}
            onPress={() => navigation.replace('Collabs')}
          />
          
          <Icon2
            name="options-vertical"
            color="white"
            size={30}
            style={{padding: 10}}
            onPress={() => setModalVisible(!modalVisible)}
          />
          </View>
        </View> 
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onDismiss={()=>setModalVisible(!modalVisible)}
        onRequestClose={() =>setModalVisible(!modalVisible)}
      >
      <TouchableOpacity 
        activeOpacity={1} 
        style={{height:'100%',width:'100%'}}  
        onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.modal}>
        <View style={styles.name}>
          <Image source={{uri: 'https://robohash.org/'+username}} style={styles.image}/>
          <Text style={styles.note}> {username} </Text>
        </View>

        <TouchableOpacity style={styles.title} onPress={() => handleChange()}>
          <Text style={styles.title}> Change Password </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.title} onPress={() => handleSignout()}>
          <Text style={styles.title}> Sign Out </Text>
        </TouchableOpacity>
      </View>
      
      </TouchableOpacity>
      </Modal>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
    height:60,

  },
  right:{
    position:'absolute',
    flexDirection:'row',
    right:0,
  },
  left:{
    position:'absolute',
    left:10,
  },
  modal: {
    position:'absolute',
    top:60,
    right:0,
    margin:5,
    height: 190,
    width: "55%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "black",
    paddingTop:5
  },
  name:{
    flexDirection:'row',
    paddingTop: 10,
    paddingLeft:20,
    paddingBottom:10
  },
  note: {
    position: "relative",
    marginLeft:10,
    fontSize: 20,
    width:'60%',
    color: "white",
    alignSelf:'center',
  },
  title: {
    position: "relative",
    left: 0,
    paddingTop: 6,
    fontSize: 20,
    color: "white",
  },
  image:{
    height: 60,
    width:60,
    borderRadius: 400/ 2,
    borderColor:'#26272C',
    backgroundColor:'#26272C'
  },
});

export default TopBar;
