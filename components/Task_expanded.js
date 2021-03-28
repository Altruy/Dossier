
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, { useState } from "react";
import Colors from "../constants/colors";
//import Icon from "react-native-vector-icons/FontAwesome5";
import Toggle from 'react-native-toggle-element';
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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Modal } from 'react-native-paper';

const Task_expanded =({data}) =>{
    const [show,setShowState] = useState(false)
    const [toggleValue, setToggleValue] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    
    const renderSeparator = () => {
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
    return(
       
        <TouchableOpacity
      style={styles.accordian}
      onPress={() => setShowInfo(!showInfo)}
    >
      <View style={styles.box}>
        <View style={styles.dropdown}>
          <Text style={styles.title}>dsdsdsd</Text>
          
        
        </View>

        {showInfo && (
          <View style={styles.answers}>
          <View style={styles.toggle}> 
            <Text style={styles.answer}>All Notifications: </Text>
           
            </View>
            <View style={styles.toggle}> 
            <Text style={styles.answer}>Chat Notifications: </Text>
            </View>
          </View>
        )}
        {showInfo ? (
          <Icon name="angle-up" size={25} style={styles.icon} color="white" />
        ) : (
          <Icon name="angle-down" size={25} style={styles.icon} color="white" />
        )}
      </View>
    </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    icon: {
        position: "relative",
        alignSelf: "center",
      },
    toggleb:{
        position: "absolute",
        paddingTop: 10,
        left: "150%",
        paddingBottom:10
      },
      toggle:{
        flexDirection:"row",
        justifyContent: "space-between",
        paddingBottom:10
      },
      container: {
        flex: 1,
        backgroundColor: Colors.homeback,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOpacity: 0.5,
        width: "100%",
      },
      dropdown: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        alignItems: "center",
      },
      box: {
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        width: "90%",
        borderRadius: 15,
        alignItems: "flex-start",
        marginBottom:10
      },
      title: {
        // alignItems: "flex-start",
        color: "white",
        fontSize: 21,
        paddingTop: 0,
        paddingBottom: 0,
      },
      answer: {
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 7,
        color: "white",
        fontSize: 14,
      },
      answers: {
        paddingTop: 10,
        paddingRight:10
      },
      icon: {
        position: "relative",
        alignSelf: "center",
      },
      accordian: {
        width: "100%",
        alignItems: "center",
        paddingTop:20
      },
      clip: {
        position: "absolute",
        paddingTop: 3,
        left: "75%",
      },
      edit: {
        position: "absolute",
        paddingTop: 3,
        left: "85%",
      },
      times: {
        position: "absolute",
        paddingTop: 4,
        left: "95%",
      },
})
export default Task_expanded;