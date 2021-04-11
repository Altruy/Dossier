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
      Alert.alert(`Task '${title}' Updated`)
      navigation.navigate('Tasks')
    }
  }


  return (
    <ImageBackground
      source={require("../../assets/Notification-background.png")}
      style={styles.image}
    >
      <AssigneeModal modal={modal} setModal={setModal} users={all} assignee={assignee} setAssi={setAssi} />
      { deadline && <DateTimeModal modal={modal1} setModal={setModal1} datetime={deadline} setdatetime={setDeadline} />}
      <Text style={{color:'white',fontSize:18,alignSelf:'center',top:40}}> Edit Task</Text>
      <View style={styles.block}>
      
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
          <View style={{ flexDirection: "row" }} >
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
          <View style={{ flexDirection: "row" }}>
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
          <TextInput multiline={true}
          spellCheck={true}
          style={styles.dinput}
          inlineImagePadding={20}
          onChangeText={(text) => setDesc(text)}
          defaultValue={desc} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleUpdate()}
        style={styles.btn}
      >
        <Text style={styles.textbtn}>Update Task</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
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
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 8,
    margin: 10,
    width: "75%",
    color:'white'
  },
  dinput: {
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 8,
    margin: 10,
    width: "75%",
    color:'white',
    height: "40%",
  },
  assignee: {
    color: "white",
  },
  deadline: {
    color: "white",
  },
  desc: {
    color: "white",
  },
  block: {
    top: "7%",
    left: "10%",
  },
  sblock: {
    top: "5%",
  },
  ffblock: {
    top: "2%",
  },
  fblock: {
  },
  tblock: {
    top: "8%",
  },
  btn: {
    position: "relative",
    top:'-8%',
    left: "37%",
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "25%",
    height: "7%",
  },
  textbtn: {
    color: "white",
    top: "30%",
    left: "12%",
  },
  icon: {
    left: 190,
  },
});

export default EditTasks;
