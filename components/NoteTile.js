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

const NoteTile = ({ data, navigation }) => {
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
              onPress={() => {
                setStar(!Star);
              }}
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
            {note.creator === username && <TouchableOpacity
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
    position: "relative",
    textAlign: "center",
    color: "white",
    fontSize: 15,
    // alignSelf: "stretch",
  },
  user: {
    position: "absolute",
    textAlign: "right",
    paddingRight: 8,
    bottom: "20%",
    right: "20%",
    paddingRight: "10%",
    fontSize: 10,
    color: "white",
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
