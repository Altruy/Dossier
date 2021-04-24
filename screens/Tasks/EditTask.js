import React ,{useState , useEffect}from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ImageBackground,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import {useAuth} from '../../auth_providers/Auth'
import AssigneeModal from "../../components/AssigneeModal";
import DateTimeModal from "../../components/DateTimeModal";
import { getUsers,addNotif } from "../../API";

const EditTasks = ({ navigation }) => {
  const [title,setTitle] = useState('')
  const [modal,setModal] = useState(false)
  const [modal1,setModal1] = useState(false)
  const [assignee,setAssi] = useState([])
  const [deadline,setDeadline] = useState(null)
  const [desc, setDesc] = useState('')
  const [all, setall] = useState([])
  const { realm , collabId , username } = useAuth();

  useEffect(() => {
    if(realm!== null){
      let tas = realm.objects('task').filtered(`id = "${navigation.getParam('id')}"`)
      setTitle(tas[0].title)
      setAssi(tas[0].assignees)
      setDeadline(tas[0].deadline)
      setDesc(tas[0].description)
    }
   
  }, [realm])

 

  useEffect(() => {
    getUsers(collabId).then((resp)=>{
      if(resp!==null){
        setall(resp)
      }
    })
  }, [])

  const handleUpdate=()=>{
    if(!title){
      Alert.alert('Atleast 1 Title is needed')
    }
    else if (title[0] === ' '){
      Alert.alert('Title cannot start with an empty space')
    }
    else if (title.length >15){
      Alert.alert('Title too long, only 15 characters allowed')
    }
    else if(assignee.length===0){
      Alert.alert('Atleast 1 assignee is needed')
    }
    else {
      let tas = realm.objects('task').filtered(`id = "${navigation.getParam('id')}"`)[0]
      realm.write(() => {
        tas.title = title;
        tas.assignees= assignee;
        tas.deadline = new Date(deadline);
        tas.description = desc
      });
      addNotif(collabId,username,`${username} added a new Task '${title}'`,assignee)
      Alert.alert(
        `Task '${title}' Updated`,
        'Your Task has been updated',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          { text: 'Okay', onPress: () => navigation.replace('Tasks') }
        ],
        { cancelable: false }
      );
    }
  }


  return (
    <ImageBackground
      source={require("../../assets/Notification-background.png")}
      style={styles.image}
    >
      <AssigneeModal modal={modal} setModal={setModal} users={all} assignee={assignee} setAssi={setAssi} />
      { deadline && <DateTimeModal modal={modal1} setModal={setModal1} datetime={deadline} setdatetime={setDeadline} />}
      <Text style={{color:'white',fontSize:18,alignSelf:'center',paddingTop:'10%'}}> Edit Task</Text>
      <ScrollView style={{height:500,  marginTop:30}} >
      
      <View style={styles.fblock}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.assignee} > Edit Title</Text>
        </View>
        <TextInput style={styles.input} 
          onChangeText={(text)=>setTitle(text)}
          defaultValue={title}/>
        </View>
        <View style={styles.ffblock} >
          <TouchableOpacity onPress={()=>setModal(true)}>
          <View style={{ flexDirection: "row" , justifyContent:'space-between', width:'75%'}} >
            <Text style={styles.assignee}> Edit Assignee</Text>
            <Icon
              name="person-add-sharp"
              size={25}
              color="white"
              style={styles.icon}
            />
          </View>
          <TextInput style={styles.input} editable={false} value={assignee.join(' , ')} />
          </TouchableOpacity>
        </View>

        <View style={styles.sblock}>
        <TouchableOpacity onPress={()=>setModal1(true)}>
          <View style={{ flexDirection: "row", justifyContent:'space-between', width:'75%' }}>
            <Text style={styles.deadline}> Edit Deadline</Text>
            <Icon2
              name="calendar-clock"
              size={25}
              color="white"
              style={styles.icon}
            />
          </View>
          <TextInput style={styles.input} editable={false} 
          value={new Date(deadline).toString().slice(0,new Date(deadline).toString().indexOf('GMT')-4)} />
          </TouchableOpacity>

        </View>
        <View style={styles.tblock}>
          <Text style={styles.desc}> Edit Description</Text>
          <TextInput
              style={styles.dinput}
              textAlignVertical="top"
              multiline={true}
              value={desc}
              onChangeText={(text) => setDesc(text)}
          />
        </View>
      <TouchableOpacity
        onPress={() => handleUpdate()}
        style={styles.btn}
      >
        <Text style={styles.textbtn}>Update Task</Text>
      </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
    flex:1
  },
  labelSelect: {
    marginTop: 5,
    marginBottom: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'dashed',
    borderColor: '#999'
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 8,
    margin: 10,
    width: "75%",
    color:'white',
    paddingLeft:20
  },
  dinput: {
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 8,
    margin: 10,
    marginTop:20,
    width: "75%",
    color:'white',
    height: "40%",
  },
  assignee: {
    color: "white",
    marginLeft:10
  },
  title: {
    color: "white",
    marginLeft:10,
    marginBottom: 10
  },
  deadline: {
    color: "white",
    marginLeft:10
  },
  desc: {
    color: "white",
    marginLeft:10
  },
  block: {
    
  },
  sblock: {
    top: "5%",
    left:'10%'
  },
  ffblock: {
    top: "2%",
    left:'10%',
    width:'100%',

  },
  fblock: {
    marginTop:'5%',
    left:'10%'
  },
  tblock: {
    left:'10%',
    top: "8%",
    height:300
  },
  btn: {
    position: "absolute",
    alignSelf:'center',
    bottom:20,
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: "#B100FF",
    width: 110,
    height: "6%",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  textbtn: {
    color: "white",
    top: "20%",
    textAlign:'center'
  },
  icon: {
  },
});

export default EditTasks;
