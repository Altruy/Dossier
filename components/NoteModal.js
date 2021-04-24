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
  Platform,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NoteModal = ({modal,setModal,text,setText,handleNew}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(false)
        }}
      >
        <TouchableOpacity activeOpacity={1} 
          style={{height:'100%',width:'100%',backgroundColor:"rgba(52, 52, 52, 0.8)"}}  
          onPress={() => setModal(false)}>
      <View style={styles.modal}>
        <Icon style={styles.times} name="times" size={30} color="white" 
        onPress={()=>{
          setText('')
          setModal(false)
        }}/>

        <Text style={styles.note}>New Note</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Title:</Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <TouchableOpacity onPress={() => {
          if(!text){
            Alert.alert('Please enter a Title')
          }
          else if (text[0] === ' '){
            Alert.alert('Title cannot start with an empty space')
          }
          else if (text.length >15){
            Alert.alert('Title too long, only 15 characters allowed')
          }
          else{
            if(text.length>15){
              Alert.alert('Title too long, only 15 characters allowed')
            }
            else{
            handleNew()
            Alert.alert(`New note '${text}' Created`)
            }
          }
          }}>
          <Text style={styles.btn}>Create</Text>
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
      </Modal>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    height:'100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    position:'absolute',
    alignSelf:'center',
    height: 220,
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:40,
    backgroundColor: "black",
    opacity:0.91,
    bottom:'30%'
  },
  note: {
    position: "relative",
    top: -30,
    fontSize: 20,
    fontWeight:'bold',
    color: "white",
  },
  title: {
    position: "relative",
    left: 0,
    paddingTop: '3%',
    fontSize: 15,
    color: "white",
    fontSize:18
  },
  input: {
    top: -10,
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "60%",
    height: "60%",
    color:'white',
    paddingLeft:15,
    fontSize:18
  },
  btn: {
    position: "relative",
    top: 0,
    left: "1%",
    color: "black",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    paddingTop: 4,
    fontSize:18
  },
  times: {
    position: "relative",
    top: -10,
    left: "37%",
  },
});

export default NoteModal;
