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
import { getUsers } from "../../API";
import {ObjectID} from 'react-native-bson'
import { addNotif } from '../../API'


const CreateTasks = ({ navigation }) => {
  const [title,setTitle] = useState('')
  const [modal,setModal] = useState(false)
  const [modal1,setModal1] = useState(false)
  const [assignee,setAssi] = useState([])
  const [deadline,setdeadline] = React.useState(new Date())
  const [desc, setDesc] = useState('')
  const [all, setall] = useState([])
  const { realm ,username ,collabId} = useAuth();

  useEffect(() => {
    setdeadline(Date.now())
  }, [])


  useEffect(() => {
    getUsers(collabId).then((resp)=>{
      if(resp!==null){
        setall(resp)
      }
    })
  }, [])

  const handleCreate=()=>{
    if(!title){
      Alert.alert('Please Add a Title')
    }
    else if(assignee.length===0){
      Alert.alert('Please select Atleast 1 assignee')
    }
    else {
      let no;
      let nid = new ObjectID();
      realm.write(() => {
        no = realm.create("task", {
          _id: nid,
          collab : collabId,
          description: desc,
          assigner : username,
          assignees : assignee,
          deadline : new Date(deadline),
          title : title,
          id : nid.toString(),
          competed:false
        });
      });
      addNotif(collabId,username,`${username} added a new Task '${title}'`,assignee)
      setModal(false);
      Alert.alert(`New Task '${title}' Created`)
      navigation.navigate('Tasks')
    }
  }


  return (
    <ImageBackground
      source={require("../../assets/Notification-background.png")}
      style={styles.image}
    >
      <AssigneeModal modal={modal} setModal={setModal} users={all} assignee={assignee} setAssi={setAssi} />
      <DateTimeModal modal={modal1} setModal={setModal1} datetime={deadline} setdatetime={setdeadline} />
      <Text style={{color:'white',fontSize:18,alignSelf:'center',top:40}}> Create New Task</Text>
      <View style={styles.block}>
      
      <View style={styles.fblock}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title} > Add Title</Text>
        </View>
        <TextInput style={styles.input} 
          onChangeText={(text)=>setTitle(text)}
          defaultValue={title}/>
        </View>
        <View style={styles.ffblock} >
          <TouchableOpacity onPress={()=>setModal(true)}>
          <View style={{ flexDirection: "row" }} >
            <Text style={styles.assignee}> Add Assignee</Text>
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
          <View style={{ flexDirection: "row" }} >
          <Text style={styles.deadline}> Add Deadline</Text>
            <Icon2
                name="calendar-clock"
                size={30}
                color="white"
                style={styles.icon}
              />
          </View>
          <TextInput style={styles.input} editable={false} 
            value={new Date(deadline).toString().slice(0,new Date(deadline).toString().indexOf('GMT')-4)} />
          </TouchableOpacity>

          
        </View>
        <View style={styles.tblock}>
          <Text style={styles.desc}> Add Description</Text>
          <TextInput multiline={true}
          spellCheck={true}
          style={styles.dinput}
          inlineImagePadding={20}
          onChangeText={(text) => setDesc(text)}
          defaultValue={desc} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleCreate()}
        style={styles.btn}
      >
        <Text style={styles.textbtn}>Create Task</Text>
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
    top: "8%",
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
    backgroundColor: "#B100FF",
    width: "25%",
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
    top: "30%",
    left: "12%",
  },
  icon: {
    left: 190,
  },
});

export default CreateTasks;
