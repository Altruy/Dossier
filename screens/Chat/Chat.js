import React, {useState, useEffect} from "react";
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
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import ChatHomeScreen from "../../components/ChatHomeScreen";
import {useAuth} from '../../auth_providers/Auth'
import {getUsers} from '../../API'

const RenderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "79%",
        backgroundColor: "#CED0CE",
        marginLeft: "4.5%",
        opacity: 0.2,
        left: "2.5%",
      }}
    />
  );
};

const Chat = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [all, setall] = useState([])
  const [fil, setfil] = useState([])
  const {realm , collabId , username} = useAuth()
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setfil(all.filter((v)=>v.username.includes(query)))
  }
  
  useEffect(() => {
    if(all.length===0){
      getUsers(collabId).then((resp)=>{
        if(resp!==null){
          setall(resp)
          setfil(resp)
        }
      })
    }
    
  }, [])


  return (
    <ImageBackground
      source={require("../../assets/Chat-background.png")}
      style={styles.image}
    >
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
          
        </View>
        <View style={{ justifyContent: "center", left: "2%" }}>
          <RenderSeparator />
        </View>
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <View style={styles.fl}>
          <ChatHomeScreen
            data={fil}
            navigation={navigation}
          />
        </View>
      </ScrollView>
      <View style={{ justifyContent: "center", left: "2%" }}>
        <RenderSeparator />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "center",
  },
  upperbar: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 20,
    justifyContent:'center'
  },
  search: {
    position:'absolute',
    width: "50%",
    borderRadius: 30,
    backgroundColor: "#26272C",
  },
  btn: {
    position: "absolute",
    fontSize: 18,
    width: "21%",
    height: 50,
    backgroundColor: "#26272C",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    paddingTop: 12,
    left: "65%",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  fl: {
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 30,
    alignSelf: "center",
    width:'90%'
  },
});
export default Chat;
