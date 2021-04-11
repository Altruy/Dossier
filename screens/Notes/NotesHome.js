import React ,{ useEffect, useState } from "react";
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
  Alert
} from "react-native";
import NoteTile from "../../components/NoteTile";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import {useAuth} from '../../auth_providers/Auth'
import Modal from '../../components/NoteModal'
import {ObjectID} from 'react-native-bson'
import { addNotif } from '../../API'

const Notes = ({ navigation }) => {
  const [modal, setModal] = useState(false)
  const [searchQuery, setSearchQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  const [fildata, setFildata] = React.useState([]);
  const [text,setText] = React.useState('')
  const { realm , username , collabId} = useAuth();

  const onChangeSearch = (query) => {
    setFildata(data.filter((item)=>item.title.includes(query)))
    setSearchQuery(query);
  }

  useEffect(() => {
    if(realm!==null)
    {
      let dat = realm.objects('note')
      setData(dat)
      setFildata(dat)
    }
    
  }, [realm])

  const handleNew = () =>{
    if(!!text){
      console.log('title',text)
      let no;
      let nid = new ObjectID();
      let nidd = new ObjectID();
      realm.write(() => {
        no = realm.create("note", {
          _id: nid,
          collab : collabId,
          creator : username,
          content : "",
          editing : "",
          title : text,
          id : nid.toString()
        });
      });
      addNotif(collabId,username,`${username} added a new Note '${text}'`)
      setModal(false);
      setText('');
      Alert.alert(`New note '${text}' Created`)
      navigation.replace('Notes')
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/Notes-background.png")}
      style={styles.image}
    >
      <View style={styles.modal}>
        <Modal modal={modal} setModal={setModal} text={text} setText={setText} handleNew={handleNew}/>
      </View>
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

      <FlatList
        data={fildata}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: 20,
          justifyContent: "space-around",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteTile data={item} navigation={navigation} />
        )}
        style={styles.fl}
      />
      <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}
          style={styles.btn}
        >
            <Icon name="add" size={30} color="white"  />
        </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "20%",
    paddingBottom: "15%",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
  },

  upperbar: {
    width:'100%',
    marginBottom: "10%",
    marginTop:'10%',
    flexDirection: "row",
    justifyContent:'center'
  },
  search: {
    width: "55%",
    height:45,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.50)"
  },
  btn: {
    position:'absolute',
    fontSize: 15,
    width: 60,
    height: 60,
    backgroundColor: '#B100FF',
    borderRadius: 50,
    bottom:'5%',
    right:'10%',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});

export default Notes
