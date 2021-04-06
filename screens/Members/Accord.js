import React, {useState} from 'react'
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
import Modalinvite from './modal'

import Member from './Member'

export default Accordion = ({data,navigation}) => {
    const [showInfo, setShowInfo] = useState(false)
    const {
        _id,
        admins,
        collab,
        creator,
        name,
        users,
    } = data

    return (
        <View style={styles.accordion}>
            <View style={styles.accordionbox}>
                <TouchableOpacity
                    style={styles.accordionbutton}
                    onPress={() => setShowInfo(!showInfo)}
                >
                    <Text style={styles.titletext}>{name}</Text>
                    <Modalinvite collab={collab} name={name}/>
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
                            nestedScrollEnabled={true}
                        >
                            <View>
                                <FlatList
                                    nestedScrollEnabled={true}
                                    data={users.map((v,i)=>{
                                        let role = 'user'
                                        if ( v === creator ){
                                            role = 'creator'
                                        }
                                        else if (admins.includes(v)){
                                            role = 'admin'
                                        }

                                        return {
                                            'key':i.toString() , 
                                            'user':v,
                                            'role' : role
                                        }
                                    })}
                                    renderItem={({item}) => (
                                        <Member data={item} creator={creator} navigation={navigation}  />
                                    )}
                                    keyExtractor={(v,i)=>i.toString()}
                                />
                            </View>
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
