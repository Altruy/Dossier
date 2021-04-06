import React, {useState} from 'react'
import {Alert} from 'react-native'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { useAuth } from '../../auth_providers/Auth'
import {removeAdmin , addAdmin} from '../../API'

const Roleicon = ({role, creator, user,navigation}) => {
    const {username , collabId} = useAuth()

    const handleRemove = async () => {
        removeAdmin(collabId,user).then((resp)=>{
            navigation.replace('Members')
        })
    }

    const handleAdd = async () => {
        addAdmin(collabId,user).then((resp)=>{
            navigation.replace('Members')
        })
    }
 
    const roleID = (role) => {
        if (role === 'creator') {
            return (
                <View >
                    <TouchableOpacity
                        style={styles.roleOwner}
                    >
                        <Text style={styles.btntext}>Owner</Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (role === 'admin' && creator === username ) {
            return (
                <View >
                    <TouchableOpacity
                        style={styles.roleAdmin}
                        onPress={() => Alert.alert(
                            `Remove '${user}' as admin`,
                            `Are you sure you want to Remove this admin?\nThis can be undone.`,
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

                        <Text style={styles.btntext}>Admin</Text>
                        <Icon style={styles.cross} name="times" size={20} color="white" />
                 
                    </TouchableOpacity>
                    
                </View>
            )
        } else if (role !== 'admin' && creator === username ) {
            return (
                <View >
                    <TouchableOpacity
                        style={styles.roleAdmina}
                        onPress={() => Alert.alert(
                            `Add '${user}' as admin`,
                            `Are you sure you want to Add this user as admin?\nThis can be undone.`,
                            [
                              {
                                text: 'Cancel',
                                style: 'cancel'
                              },
                              { text: 'Add', onPress: () => handleAdd() }
                            ],
                            { cancelable: true }
                          )}
                    >

                        <Text style={styles.btntext}>Admin</Text>
                        <Icon style={styles.cross} name="plus" size={20} color="white" />
                 
                    </TouchableOpacity>
                    
                </View>
            )
            
        }else if (role === 'admin' && creator !== username ) {
            return (
                <View >
                    <TouchableOpacity
                        style={styles.roleAdmins}
                    >
                        <Text style={styles.btntext}>Admin</Text>
                    </TouchableOpacity>
                </View>
            )
        } else
            return null
        }

    return roleID(role)
}


export default Roleicon

const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',
        color: 'white',
        flexDirection: 'row',
        // paddingVertical: 10,
    },

    roleOwner: {
        position : 'absolute',
        backgroundColor: '#212068',
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 2,
        top:'7%',
        right:0,

        borderRadius: 20,
    },
    roleAdmina: {
        position : 'absolute',
        backgroundColor: '#3F1841',
        alignSelf: 'flex-end',
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 20,
        width : 90,
        top:'6%',
        right:0,
    },

    roleAdmin: {
        position : 'absolute',
        backgroundColor: '#3F1851',
        alignSelf: 'flex-end',
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 20,
        width : 90,
        top:'6%',
        right:0,
    },
    roleAdmins: {
        position : 'absolute',
        backgroundColor: '#3F1851',
        alignSelf: 'flex-end',
        paddingLeft:15,
        paddingVertical: 2,
        borderRadius: 20,
        width : 71,
        top:'6%',
        right:0,
    },
    cross :{
        position: "absolute",
        top: 2,
        right: "12%",
    },
    btntext: {
        color: 'white',
        // paddingRight: 10,
        paddingBottom: 3,
        // marginVertical: 10,
    },
})
