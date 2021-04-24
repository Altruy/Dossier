import React, { useState , useEffect} from "react";
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
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dimensions } from 'react-native';
import {getUsers} from '../API'
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import {useAuth} from '../auth_providers/Auth'

const AssigneeModal = ({modal,setModal,assignee,setAssi,users}) => {
  const [all, setall] = useState(users)
  const [selected, setselected] = useState(assignee)
  const {collabId} = useAuth();

  useEffect(() => {
    if(all.length===0){
      getUsers(collabId).then((resp)=>{
        if(resp!==null){
          setall(resp)
        }
      })
    }
    
  }, [])

  const handleSelect = (a) =>{
    if(!selected.includes(a)){
      setselected([...selected,a])
    }
    let arr = all.filter((val)=> val.username !== a.username)
    setall(arr)
    setAssi([...selected,a].map((item)=>item.username))
  }
  const handleUnSel = (item)=>{
    let arr = selected.filter((val)=> val.username !== item.username)
    setselected(arr)
    if(!all.includes(item)){
      setall([...all,item])
    }
    setAssi(arr.map((item)=>item.username))
  }
  const handleDone = () =>{
    setAssi(selected.map((item)=>item.username))
    setModal(false)
  }


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
        <TouchableOpacity 
        activeOpacity={1} 
        style={{height:'100%',width:'100%',backgroundColor:"rgba(52, 52, 52, 0.8)"}}  
        onPress={() => setModal(false)}>
      <View style={styles.modal}>
        <Icon style={styles.times} name="times" size={30} color="white" 
        onPress={()=>{
          setModal(false)
        }}/>

        <Text style={styles.note}>Add Assignees</Text>
        
        <Text style={styles.title}>Assignees:</Text>
        <View style={styles.input} >
        <FlatList
            data={selected}
            renderItem={({item})=>{
              return <View >
                <Text style={styles.labels} onPress={()=>handleUnSel(item)}>{item.username}</Text>
                <Icon style={styles.cross} name="times" size={20} color="white" />
                </View>}
            } 
            overScrollMode='always' />
        </View>
        
        <Text style={styles.title2}>Users:</Text>
        <View style={styles.input2}>
          <FlatList
            data={all}
            renderItem={({item})=>{
              return <View >
              <Text style={styles.label} onPress={()=>handleSelect(item)}>{item.username}</Text>
              <Icon style={styles.cross} name="plus" size={20} color="white" />
              </View>}
            } 
            overScrollMode='always' />
        </View>
        <TouchableOpacity onPress={() => handleDone()}>
          <Text style={styles.btn}>Done</Text>
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
      </Modal>
    </View> 
  )
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    height:'100%',
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    marginTop:'40%',
    marginLeft:'7%',
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "black",
    opacity:0.91
  },
  note: {
    fontSize: 20,
    fontWeight:'bold',
    color: "white",
    top:-13
  },
  title: {
    left: '-27%',
    paddingTop: '3%',
    fontSize: 15,
    color: "white",
    fontSize:18
  },
  input: {
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    height: "20%",
    color:'white',
    paddingLeft:15,
    fontSize:18
  },
  title2: {
    left: '-32%',
    marginTop: '7%',
    fontSize: 15,
    color: "white",
    fontSize:18
  },
  input2: {
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    height: "20%",
    color:'white',
    paddingLeft:15,
    fontSize:18
  },
  btn: {
    top: 15,
    left: "1%",
    color: "black",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    paddingTop: 4,
    fontSize:18,
  },
  times: {
    position: "absolute",
    top: 31,
    right: "8%",
  },
  cross: {
    position: "absolute",
    top: 11,
    right: "8%",
  },
  label:{
    color:'white',
    fontSize:16,
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  labels:{
    color:'white',
    fontSize:16,
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  labelco:{
    color:'white',
  }
});

export default AssigneeModal;