import React from "react";
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

const RenderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "79%",
        backgroundColor: "#CED0CE",
        marginLeft: "4.5%",
        opacity: 0.2,
        left:'2.5%'
      }}
    />
  );
};

<<<<<<< HEAD
const Chat = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
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
        <View style={{justifyContent:'center',left:'2%'}}>
        <RenderSeparator />
        </View>
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
      <View style={styles.fl}>
      <ChatHomeScreen
         
            data={[{name: "SDS",id:1,image:require('../../assets/members.png')},
            {name: "Software Engineering",id:2,image:require('../../assets/members.png')},
            {name: "Network Security",id:3,image:require('../../assets/members.png')},
            {name: "Advanced Programming",id:4,image:require('../../assets/members.png')},
            {name: "Theory of Automata",id:5,image:require('../../assets/members.png')},{name: "SDS",id:1,image:require('../../assets/members.png')},
            {name: "Software Engineering",id:2,image:require('../../assets/members.png')},
            {name: "Network Security",id:3,image:require('../../assets/members.png')},
            {name: "Advanced Programming",id:4,image:require('../../assets/members.png')},
            {name: "Theory of Automata",id:5,image:require('../../assets/members.png')},{name: "SDS",id:1,image:require('../../assets/members.png')},
            {name: "Software Engineering",id:2,image:require('../../assets/members.png')},
            {name: "Network Security",id:3,image:require('../../assets/members.png')},
            {name: "Advanced Programming",id:4,image:require('../../assets/members.png')},
            {name: "Theory of Automata",id:5,image:require('../../assets/members.png')}]
        
             }
             />
             </View>
             </ScrollView>
             <View style={{justifyContent:'center',left:'2%'}}>
        <RenderSeparator />
        </View>
    </ImageBackground>
  );
};

=======
>>>>>>> d3c5dbd59bbafb8d676fb7730d94156fa5396407
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
    
  },
  search: {
    position: "absolute",
    width: "50%",
    borderRadius: 30,
    backgroundColor: "#26272C",
    left: "10%",
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
    flexDirection:'row'
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
    alignSelf:'center'
  },
});
export default Chat;
