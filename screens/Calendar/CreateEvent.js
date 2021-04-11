import React ,{useState ,useEffect} from 'react'
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
    KeyboardAvoidingView,
    Alert
} from 'react-native'
import DateTimeModal from "../../components/DateTimeModal";

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { addEvent, addNotif } from '../../API';
import { useAuth } from '../../auth_providers/Auth';
import {ObjectID} from 'react-native-bson'

const CreateEvent = ({navigation}) => {
    const [title, setTitle] = React.useState('')
    const [date, setDate] = React.useState(new Date())
    const [Duration, setDuration] = React.useState('')
    const [Desription, setDescription] = React.useState('')
    const [modal1,setModal1] = useState(false)
    const {collabId , username, realm} = useAuth()
    
    const onChangeTitle = (query) => setTitle(query)
    const onChangeDuration = (query) => setDuration(query)
    const onChangeDescription = (query) => setDescription(query)

    const handleCreate = async ()=>{
        if(!title){
            Alert.alert('Add a title for your event')
        }
        else if(!date){
            Alert.alert('Add a Date for your event')
        }
        else {
          let nid = new ObjectID();
          realm.write(() => {
            realm.create("event", {
              _id: nid,
              collab : collabId,
              date: new Date(date),
              description: Desription,
              user : username,
              duration : Duration,
              title : title,
              id : nid.toString(),
              competed:false
            });
          });
          addNotif(collabId,username,`${username} added a new Event '${title}'`)
            Alert.alert('Event successfully added')
            navigation.replace('Calendar',{
              ad:true
            })
        }
    }
    

    return (
        <ImageBackground
            source={require('../../assets/Calendar-background.png')}
            style={styles.image}
        >
            <KeyboardAvoidingView>
                <ScrollView
                    keyboardShouldPersistTaps={'always'}
                    // style={styles.container}
                    contentContainerStyle={styles.block}
                    // showsVerticalScrollIndicator={false}
                >
                    <Text style={{position:'absolute',color:'white',fontSize:18,left:'22%',top:-5}}> Create New Event</Text>
                    <DateTimeModal modal={modal1} setModal={setModal1} datetime={date} setdatetime={setDate} />
                    <View style={styles.sblock}>
                        <Text style={styles.title}> Add Title</Text>

                        <TextInput style={styles.input} onChangeText ={(value) => onChangeTitle(value)}/>
                    </View>

                    <View style={styles.dblock}>
                    <TouchableOpacity onPress={()=>setModal1(true)}>
                    <View style={{ flexDirection: "row" }} >
                    <Text style={styles.deadline}> Add Date</Text>
                        <Icon2
                            name="calendar-clock"
                            size={30}
                            color="white"
                            style={styles.icon}
                        />
                    </View>
                    <TextInput style={styles.input} editable={false} 
                        value={new Date(date).toString().slice(0,new Date(date).toString().indexOf('GMT')-4)} />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.sblock}>
                        <Text style={styles.assignee}> Add Duration</Text>

                        <TextInput style={styles.input} onChangeText ={(value) => onChangeDuration(value)} />
                    </View>

                    <View style={styles.tblock}>
                        <Text style={styles.assignee}> Add Description</Text>
                        <TextInput
                            style={styles.dinput}
                            textAlignVertical="top"
                            multiline={true}
                            onChangeText ={(value) => onChangeDescription(value)}
                        />
                        
                    </View>
                        <TouchableOpacity
                            onPress={() => handleCreate()}
                            style={styles.btn}
                        >
                            <Text style={styles.textbtn}>Create Event</Text>
                        </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

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
        width: "75%",
        color:'white',
        height: "40%",
        textAlignVertical:'center'
      },
      title: {
        color: "white",
        left:10,
        marginBottom:10
      },
      assignee: {
        color: "white",
        left:10,
        marginTop:10,
        marginBottom:10
      },
      deadline: {
        color: "white",
        left:10,
        marginTop:3,
        marginBottom:10
      },
      desc: {
        color: "white",
        top:10
      },
      block: {
        height: '100%',
        top: "7%",
        left: "10%"
      },
      sblock: {
        top: "4.5%",
      },
      dblock: {
        top: "5%",
        marginTop:10,
        marginBottom:10
      },
      ffblock: {
        top: "2%",
      },
      fblock: {
      },
      tblock: {
        top: "5%",
      },
      btn: {
        position: "relative",
        top:'-12%',
        left: "27%",
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
          position:'absolute',
        // left: 200,
        right:99
      },
})

export default CreateEvent
