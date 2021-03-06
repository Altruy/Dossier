import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native'
import Roleicon from './Roleicon'
import { useAuth } from '../../auth_providers/Auth'
import {addNotif, removeUser} from '../../API'

const Member = ({data,collab,creator,navigation}) => {
    const { role, user, admins, users } = data
    const {username } = useAuth()

    const handleRemove = async () => {
        if(users.length > 1 && admins.length <= 1 ){
            Alert.alert(
                `Collab has only one Admin`,
                `Make someone else an admin before leaving this collaboration`,
                [
                  {
                    text: 'Okay',
                  },
                ],
                { cancelable: true }
              )
        }
        else {
            removeUser(collab,user).then((resp)=>{
                addNotif(collab,username,`${username} removed ${user}`)
                navigation.replace('Collabs')
            })
        }
        
    }


    return (
        <View style={styles.item}>
            <Text style={styles.names}> {user} {user === username && <Text>(Me)</Text>} </Text>
            
            <Roleicon
                role={role}
                creator={creator}
                user ={user}
                navigation={navigation}
                admins = {admins}
                users = {users}
            />
            <View style={styles.remove}>
            {  user === username &&
                    <TouchableOpacity
                        style={styles.leavebtn}
                        onPress={() => Alert.alert(
                            `Leave this Collaboration?`,
                            `Are you sure you want to leave the collaboration? You will not be able to interact any more and this action cannot be undone.`,
                            [
                              {
                                text: 'Cancel',
                                style: 'cancel'
                              },
                              { text: 'Leave', onPress: () => handleRemove() }
                            ],
                            { cancelable: true }
                          )}
                    >
                        <Text style={styles.btntext}>Leave</Text>
                        <Image
                            source={require('../../assets/remove.png')}
                            style={styles.removeicon}
                        />
                    </TouchableOpacity>
                }  
                {  (username === creator || admins.includes(username)) && user !== username &&
                    <TouchableOpacity
                        style={styles.removebtn}
                        onPress={() => Alert.alert(
                            `Remove '${user}' from this Collaboration?`,
                            `Are you sure you want to remove this user? They will not be able to interact any more and this action cannot be undone.`,
                            [
                              {
                                text: 'Cancel',
                                style: 'cancel'
                              },
                              { text: 'Remove', onPress: () => handleRemove() }
                            ],
                            { cancelable: true }
                          )}
                    >
                        <Text style={styles.btntext}>Remove</Text>
                        <Image
                            source={require('../../assets/remove.png')}
                            style={styles.removeicon}
                        />
                    </TouchableOpacity>
                }  
            </View>
        </View>
    )
}


export default Member


const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',
        width:'100%',
        color: 'white',
        flexDirection: 'row',

        paddingLeft: 20,
        paddingVertical: 10,
    },

    names: {
        color: 'white',
        // paddingRight: 10,
        alignSelf: 'flex-start',
        fontSize: 16,
        width:'60%'
    },

    btntext: {
        color: 'white',
        paddingRight: 10,
        alignContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        // marginVertical: 10,
    },
    removebtn: {
        flexDirection: 'row',
        fontSize: 18,
        backgroundColor: '#AA3939',
        borderRadius: 30,

        alignSelf: 'flex-end',
        height: 30,

        // alignContent: 'center',
        paddingHorizontal: 10,
        // paddingVertical: 6,
    },
    leavebtn: {
        flexDirection: 'row',
        fontSize: 18,
        backgroundColor: '#AA3939',
        borderRadius: 30,

        alignSelf: 'flex-end',
        height: 30,
        right:8,

        // alignContent: 'center',
        paddingHorizontal: 10,
        // paddingVertical: 6,
    },
    remove:{
        width:'30%',
        height:'100%'
    }
,
    removeicon: {
        marginTop: 3,
        height: 19,
        width: 19,
    },
})
