import React, { useState,useEffect } from "react";
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
  Alert
} from "react-native";
import { Searchbar } from "react-native-paper";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons"
import colors from "../constants/colors";
import {useAuth} from '.././auth_providers/Auth'
import {addNotif} from '../API'
import AsyncStorage from "@react-native-async-storage/async-storage";

const NoteTile = ({all, data, navigation ,setall}) => {
  const [note, setNote] = useState({})
  const [Star, setStar] = useState(false);
  const { id, title, creator, editing, fave } = data;
  const { realm , username,collabId} = useAuth();


  useEffect(() => {
    if(realm!==null && !!id)
    {
      let not = realm.objects('note').filtered(`id = "${id}"`)
      setNote(not[0]);
    }
  }, [realm,id])

  useEffect(() => {
    AsyncStorage.getItem('Notes_' + collabId).then(async (v)=>{
      if(!!v){
        let val = JSON.parse(v)
        if (val.includes(id)){
          setStar(true)
        }
      }
    })
  }, [realm,all,data,collabId])

  const handleDelete = () => {
    let not = realm.objects('note').filtered(`id = "${id}"`)[0]
    if(!!not.editing){
      Alert.alert(`Cannot Delete Note, '${not.editing}' is currently editing the Note`)
    }
    else {
      let titl = not.title;
      realm.write(() => {
        realm.delete(not);
      });
      addNotif(collabId,username,`${username} deleted a Note '${title}'`)
      Alert.alert(`Successfully Deleted Note '${title}'`)
      navigation.replace('Notes') // check
    }
  }

  const handleStar = () =>{
    let favs = []
    let unfavs = []
    if(Star){ // unstar
      console.log('to unstar',id)
      AsyncStorage.getItem('Notes_' + collabId).then(async (v)=>{
        if(!!v){
          let val = JSON.parse(v)
          val = val.filter((item)=>item !== id)
          console.log('B',val)
          AsyncStorage.setItem( 'Notes_' + collabId , JSON.stringify(val) )
          favs = all.filter((item)=> val.includes(item.id))
          unfavs = all.filter((item)=> !val.includes(item.id))

        }
        else{
          console.log('else')
          AsyncStorage.setItem( 'Notes_' + collabId , `[]` )
          favs = []
          unfavs = all
          
        }
        let sums = []
        favs.map((v)=>sums.push(v))
        unfavs.map((v)=>sums.push(v))
        setall(sums)
      })
    }
    else{ //star 
      console.log('starring')
      AsyncStorage.getItem('Notes_' + collabId).then(async (v)=>{
        if(!!v){
          let val = JSON.parse(v)
          val.push(id)
          AsyncStorage.setItem( 'Notes_' + collabId , JSON.stringify(val) )
          favs = all.filter((item)=> val.includes(item.id))
          unfavs = all.filter((item)=> !val.includes(item.id))
        }
        else{
          AsyncStorage.setItem( 'Notes_' + collabId , `[${id}]` )
          let val = [id]
          favs = [id]
          unfavs = all.filter((item)=> !val.includes(item.id))

        }
        let sums = []
        favs.map((v)=>sums.push(v))
        unfavs.map((v)=>sums.push(v))
        setall(sums)
      })
    }
    setStar(!Star)
  }

  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("EditNote",{
          id : id
        });
      }}
      background={TouchableNativeFeedback.Ripple("purple", false)}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/Notes-tile.png")}
          style={styles.image}
        >
          <View style={styles.tile}>
            <TouchableOpacity
              style={styles.star}
              onPress={() => handleStar()}
            >
              {Star ? (
                <Icon
                  name="star"
                  size={25}
                  style={styles.icon}
                  color={colors.noteback}
                />
              ) : (
                <Icon
                  name="star-o"
                  size={25}
                  style={styles.icon}
                  color="white"
                />
              )}
            </TouchableOpacity>
            {creator === username && <TouchableOpacity
              style={styles.delete}
              onPress={() => {
                handleDelete()
              }}
            >
              
                <Icon2
                  name="delete"
                  size={25}
                  style={styles.icon}
                  color={'white'}
                />
              
            </TouchableOpacity>}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.user}>-{creator}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "40%",
    height:'100%',
    alignItems: "center",
    // justifyContent: "center",
  },
  upperbar: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },
  tile: {
    padding: 55,
  },
  title: {
    // position: "absolute",
    textAlign: "center",
    textAlignVertical:'center',
    alignSelf:'center',
    justifyContent:'center',
    color: "white",
    fontSize: 15,
    width:100,
    // alignSelf: "stretch",
  },
  user: {
    position: "absolute",
    textAlign: "right",
    paddingRight: 8,
    bottom: "20%",
    right: "20%",
    paddingRight: "10%",
    fontSize: 12,
    color: "white",
    width:100,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  star: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  delete: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});

export default NoteTile;
