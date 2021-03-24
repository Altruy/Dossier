import React, { useState } from "react";
import CollabText from "./CollabText";
import Search from "./Search.js"
import Icon from "react-native-vector-icons/Ionicons";
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
} from "react-native";

const Homebar = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [show,setShowState] = useState(false)
    const [email,setemail]=useState("")
    handleEmail = (text) => {
        setemail(email=>text)
        console.log(text)
     }
    const onChangeSearch = (query) => setSearchQuery(query);
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
            />
             <TouchableOpacity
              onPress={(show) => setShowState(show => true)}
              style={styles.join}
            >
              <Text style={styles.text}>
                Join&nbsp;
                <Icon name="link" size={19} color="white" />
              </Text>
            </TouchableOpacity>
            <Modal transparent={true} visible ={show}>
            <View style ={{ backgroundColor:"rgba(52, 52, 52, 0.8)", flex:1}}>
            <View style={styles.modal}>
                <View style={styles.modaltext}>
                <Text style={styles.text}>Join Collaboration</Text>
                <Icon name="add" size={19} color="white" style={styles.cancel} onPress={(show) => setShowState(show => false)} />
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.link}>Link:</Text>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "white"
                    autoCapitalize = "none"
                    onChangeText = {(text) => console.log(text)}/>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("CreateTasks");
                    }}
                    style={styles.invite}
                    >
                    <Text style={{color:"white",paddingLeft:25}}>
                        Invite  
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </Modal>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CreateTasks");
              }}
              style={styles.btn}
            >
              <Text style={styles.text}>
                New
                <Icon name="add" size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        
        </View>
    
    );
  };
const styles = StyleSheet.create({
    link:{
        color: "white",
        fontSize: 18,
        left:"20%",
        paddingRight:25
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
        left: "30%",
        color:"white",
        borderColor:"white",
        paddingBottom:15,
        justifyContent:"center"
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
        width:190,
        color:"white",
        paddingLeft:20,
        justifyContent:"center"
        // position: "absolute",
        // width: "50%",
        // borderRadius: 30,
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        // left: "20%",
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
        margin:35,
        borderRadius:40,
        marginTop:190,
        alignContent:"center"  ,
        justifyContent:'center',
        width:300,  
        marginRight:10   ,
        height:200
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
        color: "white",
        fontSize: 18,
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
  
});

export default Homebar;
