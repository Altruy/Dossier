import React, {useState , useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native'
import Colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getNotif } from "../../API";
import Notif from './Notif'
import { useAuth } from '../../auth_providers/Auth';


const delay = (seconds) => 
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))



export default Accordion = ({col}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [data, setdata] = useState([])
    const { name , collab } = col
    const { username } = useAuth()
    let len = 0;

    useEffect(() => {
        if(showInfo){
            refresh()
        }

    }, [showInfo])
    
    const refresh = async () =>{
        if(showInfo){
            let notifs = await getNotif(username,collab)
            if (notifs.length != len){
                console.log(notifs.length , len)
                setdata(notifs)
                len = notifs.length
            }
            await delay(15);
            if(showInfo){
                refresh()
            }
        }
        
    }

    return (
        <View style={styles.accordion}>
            <View style={styles.accordionbox}>
                <TouchableOpacity
                    style={styles.accordionbutton}
                    onPress={() => setShowInfo(!showInfo)}
                >
                    <Text style={styles.titletext}>{name}</Text>

                    {showInfo ? (
                        <Icon
                            name="angle-up"
                            size={18}
                            style={styles.icon}
                            color="white"
                        />
                    ) : (
                        <Icon
                            name="angle-down"
                            size={18}
                            style={styles.icon}
                            color="white"
                        />
                    )}
                </TouchableOpacity>

                <View style={styles.dropdown}>
                    {showInfo && (
                        <ScrollView
                            style={styles.answers}
                        >
                                <FlatList
                                    nestedScrollEnabled={true}
                                    data={data}
                                    renderItem={({item}) => (
                                        <Notif notifs={item} />
                                    )}
                                    keyExtractor={(v,i)=>i.toString()}
                                />
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.homeback,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        // shadowOpacity: 0.5,
        width: '100%',
    },
    accordion: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 50,
    },
    accordionbox: {
        // paddingRight: 40,
        // alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        borderRadius: 25,

        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 10,
        marginVertical: 8,
    },
    accordionbutton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // width: '105%',
        // paddingVertical: 10,
    },
    dropdown: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 10,
        // backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomEndRadius: 25,
        // paddingLeft: 10,
        // paddingBottom: 10,
        alignItems: 'center',
        // marginBottom:
    },
    item: {
        color: 'white',
    },
    text: {
        color: 'white',
        paddingRight: 5,
    },

    titletext: {
        color: 'white',
        fontSize: 18,
        maxWidth: 200,
        width: 200,
        fontWeight: 'bold',
    },
    answers: {
        paddingTop: 10,
        maxHeight: 200,
    },
    icon: {
        // position: 'relative',
        // alignSelf: 'center',
    },

    invitebtn: {
        flexDirection: 'row',
        fontSize: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        paddingHorizontal: 10,
        // paddingVertical: 10,
        alignItems: 'center',
        height: 25,
        // left: '20%',
    },
})
