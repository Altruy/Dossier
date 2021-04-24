import React, {useState, useRef} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ImageBackground,
    TouchableOpacity,
    TouchableNativeFeedback,
    TextInput,
    Modal,
    FlatList,
    LayoutAnimation,
    Platform,
    UIManager,
    Alert
} from 'react-native'
import Colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useAuth } from '../../auth_providers/Auth'
import { addNotif, deleteEvent } from '../../API'

export default Accordian = ({data,time,month,navigation}) => {
    const [showInfo, setShowInfo] = useState(false)
    const {username,collabId} = useAuth()
    UIManager.setLayoutAnimationEnabledExperimental(true)

    const alertDelete = () => {
        Alert.alert(
          `Delete Event '${data.title}'`,
          `Are you sure you want to delete this event?\nThis cannot be undone.`,
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            { text: 'Delete', onPress: () => handleDelete() }
          ],
          { cancelable: false }
        );
      }

    const handleDelete = () =>{
        deleteEvent(data.id).then(()=>{
            Alert.alert('Event Successfully Deleted')
            addNotif(collabId,username,`${username} deleted event '${data.title}'`)
            navigation.replace('Calendar')
        })
    }

    const {
        id,
        collab,
        title,
        assignees,
        assigner,
        deadline,
        description,
        completed,
    } = data


    const toggleDropbox = (show) => {
        setShowInfo(show)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }


    return (
        <TouchableOpacity
            style={styles.accordian}
            onPress={() => toggleDropbox(!showInfo)}
        >
            <View style={styles.box}>
                <View style={styles.dropdown}>
                    <View>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.deadline}>
                            Time : {data.time}
                        </Text>
                    </View>
                    {!showInfo && 
                        <Icon
                            name="angle-down"
                            size={18}
                            style={styles.angledown}
                            color="white"
                        />
                    }
                    <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                       { username === data.user && <TouchableOpacity 
                            onPress={()=>alertDelete()}>
                            <Icon
                                style={styles.times}
                                name="times"
                                size={23}
                                color="white"
                            />
                        </TouchableOpacity>}
                    </View>
                </View>

                {showInfo && (
                    <View style={styles.answers}>
                        <Text style={styles.answer}>
                            Duration: {data.duration}
                        </Text>
                        <Text style={styles.answer}>
                            Description: {description}
                        </Text>
                        <Text style={styles.answer}>
                            User: {data.user}
                        </Text>
                    </View>
                )}
                {showInfo && 
                    <Icon
                        name="angle-up"
                        size={18}
                        style={styles.angleup}
                        color="white"
                    />
                }

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.homeback,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        width: '100%',
    },
    dropdown: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        // paddingLeft: 10,
        paddingBottom: 10,

        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    box: {
        // padding: 15,
        paddingHorizontal: 18,
        // paddingVertical: 10,
        // backgroundColor: 'rgba(100, 100, 100, 0.5)',
        width: '100%',
        // borderRadius: 15,
        // justifyContent: 'space-between',
    },
    title: {
        // alignItems: "flex-start",
        color: 'white',
        fontSize: 15,
        paddingLeft: 5,
        fontWeight:'bold'

    },
    deadline: {
        // alignItems: "flex-start",
        color: 'white',
        fontSize: 14,
        paddingTop: 9,
        paddingLeft: 5,
    },

    clockicon: {
        marginRight: 5,
        backgroundColor: '#673E7D',
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    clockicontext: {color: 'white', fontSize: 16},
    answer: {
        paddingLeft: 5,
        paddingTop: 3,
        paddingBottom: 3,
        color: 'white',
        fontSize: 14,
        
    },
    answers: {
        top:-8
    },
    angledown: {
        position:'absolute',
        bottom:0,
        left:'48%'
    },
    angleup: {
        position:'absolute',
        bottom:0,
        left:'53%'
    },
    accordian: {
        width: '100%',
        alignItems: 'center',
    },

    times: {
        // position: 'absolute',
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight:20
        // left: '95%',
    },
    separator: {
        width: '92%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        opacity: 0.8,
        borderRadius: 100,
    },
})

//References
// https://medium.com/@KPS250/creating-an-accordion-in-react-native-f313748b7b46
//https://medium.com/@KPS250/layout-animations-in-react-native-c1bce624a843