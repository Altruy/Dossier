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
import DatePicker from "react-native-datepicker";
import DateTimePicker from 'react-native-date-picker'
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const AssigneeModal = ({modal,setModal,datetime,setdatetime}) => {
  const [now, setnow] = useState(datetime)
  const [date, setdate] = useState('')
  const [time, settime] = useState('')
  const [modal1, setmodal1] = useState(false)
  const [modal2, setmodal2] = useState(false)

  const handleDone = () =>{
    setdatetime(now)
    setModal(false)
  }

  useEffect(() => {
    let year = now.getFullYear()
    let month = now.getMonth()+1
    let date = now.getDate()
    let hrs = now.getHours().toString()
    let mins = now.getMinutes().toString()
    year=year.toString()
    month=month.toString()
    date=date.toString()
    let dat = `${year}-${(month.length===1)?'0'+month:month}-${(date.length===1)?'0'+date:date}`
    let tim = `${(hrs.length===1)?'0'+hrs:hrs} : ${(mins.length===1)?'0'+mins:mins}`
    setdate(dat)
    settime(tim)
  }, [now,datetime])
  

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

        <Text style={styles.note}>Select Date & Time</Text>
        <TouchableOpacity
          onPress={()=>setmodal1(true)}>
        <View style={styles.date}>
          <Text style={styles.title}>Add Date:</Text>
          <Text style={styles.dateInput}>{date}</Text>
          <Icon2
              name="calendar-range"
              size={35}
              color="white"
            />
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>setmodal2(true)}>
        <View style={styles.time}>
          <Text style={styles.title}>Add Time:</Text>
          <Text style={styles.dateInput}>{time}</Text>
          <Icon2
              name="clock-time-nine-outline"
              size={35}
              color="white"
            />
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDone()}
          style={styles.btn1}
        >
          <Text style={styles.textbtn}>Done</Text>
      </TouchableOpacity>
      </View>
      </TouchableOpacity>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal2}
        onRequestClose={() => {
            setmodal2(false)
        }}
      >
        <TouchableOpacity 
        activeOpacity={1} 
        style={{height:'100%',width:'100%'}}  
        onPress={() => setmodal2(false)}>
        <View style={styles.wheel}>
        <Text style={styles.note2}>Select Time:</Text>
        <DateTimePicker
          date={now}
          mode="time"
          androidVariant="iosClone"
          textColor="white"
          fadeToColor='black'
          onDateChange={setnow}
        />
        <TouchableOpacity
          onPress={() => setmodal2(false)}
          style={styles.btn}
        >
          <Text style={styles.textbtn}>Done</Text>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal1}
        onRequestClose={() => {
            setmodal1(false)
        }}
      >
        <TouchableOpacity 
        activeOpacity={1} 
        style={{height:'100%',width:'100%'}}  
        onPress={() => setmodal1(false)}>
        <View style={styles.wheel}>
        <Text style={styles.note2}>Select Date:</Text>
        <DateTimePicker
          date={now}
          mode="date"
          androidVariant="iosClone"
          textColor="white"
          fadeToColor='black'
          onDateChange={setnow}
        />
        <TouchableOpacity
          onPress={() => setmodal1(false)}
          style={styles.btn}
        >
          <Text style={styles.textbtn}>Done</Text>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </Modal>
    </View> 
  )
};

const styles = StyleSheet.create({
  wheel: {
    marginTop:'58%',
    marginLeft:'7%',
    width: "85%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "black",
    height:320,
    paddingTop:33
  },
  textbtn: {
    color: "black",
  },
  modal: {
    marginTop:'60%',
    marginLeft:'7%',
    width: "85%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "black",
    opacity:0.91,
    height:300,
    paddingTop:30
  },
  note: {
    fontSize: 20,
    fontWeight:'bold',
    color: "white",
    marginBottom:30,
  },
  note2: {
    fontSize: 20,
    fontWeight:'bold',
    color: "white",
    marginBottom:10,
  },
  title: {
    left: '-30%',
    paddingTop: '2%',
    fontSize: 16,
    color: "white",
  },
  dateInput: {
    backgroundColor:'black',
    borderWidth:1,
    borderColor:'white',
    borderRadius:8,
    marginRight:'10%',
    marginLeft:'8%',
    color:'white',
    width:100,
    textAlignVertical:'center',
    textAlign:'center'
  },
  title2: {
    left: '-35%',
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
    color: "white",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 7,
  },
  btn1: {
    top: 23,
    color: "white",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 14,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 7,
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
    fontSize:18,
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  date:{
    flexDirection:'row',
    color:'white',
    fontSize:18,
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  time:{
    flexDirection:'row',
    color:'white',
    fontSize:18,
    paddingTop: '7%',
    paddingBottom: '3%'
  },
  labelco:{
    color:'white',
  }
});

export default AssigneeModal;