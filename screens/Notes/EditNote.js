import React, { useState,useEffect } from "react";
import { Alert } from "react-native";
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
  TextInput,
} from "react-native";
import Icon2 from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import {useAuth} from '../../auth_providers/Auth'


const EditNote = ({ navigation }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [id,setId] = useState(navigation.getParam('id'))
  const [edit, setEdit] = useState(false)
  const [note,setNote] = useState({})
  const { realm ,username} = useAuth();

  useEffect(() => {
    if(realm!==null && !!id)
    {
      let not = realm.objects('note').filtered(`id = "${id}"`)
      setNote(not[0]);
      setText(not[0].content);
      setTitle(not[0].title)
    }
  }, [realm,id])


  const handleEdit = () => {
    let not = realm.objects('note').filtered(`id = "${id}"`)[0]
    setNote(not)
    if(!!not.editing){
      Alert.alert(`Cannot Edit Note, '${not.editing}' is currently editing the Note`)
    }
    else {
      realm.write(() => {
        not.editing = username;
      });
      setEdit(true);
    }
  }
  const handleSave = () => {
    let not = realm.objects('note').filtered(`id = "${id}"`)[0]
    realm.write(() => {
      not.content = text;
      not.editing = '';
    });
    setEdit(false);
  }

  return (
    <ImageBackground
      source={require("../../assets/Notes-background.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="arrow-back-sharp"
            size={35}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>{title}</Text>
          {edit && <Icon
            style={styles.check}
            name="checkmark-circle-outline"
            size={35}
            color="white"
            onPress={()=>handleSave()}
          />}
           {!edit && <Icon2
            style={styles.check}
            name="edit"
            size={35}
            color="white"
            onPress={()=>handleEdit()}
          />}
        </View>
        <TextInput
          multiline={true}
          spellCheck={true}
          style={styles.input}
          inlineImagePadding={20}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          editable={edit}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: "20%",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "400",
    paddingLeft: "2%",
  },
  input: {
    position: "relative",
    paddingTop: "5%",
    borderBottomWidth: 2,
    color:'white',
    borderBottomColor: "black",
    fontSize:20,
    margin: '3%'
  },

  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  check: {
    position:'absolute',
    right:'5%'
  },
});

export default EditNote;
