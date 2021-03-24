import React, {useState} from 'react'
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

const Modalinvite = () => {
    // const genlink = () => {
    //     var text = ''
    //     var possible =
    //         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    //     for (var i = 0; i < 5; i++)
    //         text += possible.charAt(Math.floor(Math.random() * possible.length))

    //     return text
    // }
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.head}>
                            <Text style={styles.headtext}>
                                Invite Member to [Collaboration]
                            </Text>
                            <Feather
                                name="x"
                                color="white"
                                onPress={() => setModalVisible(!modalVisible)}
                                size={18}
                            ></Feather>
                        </View>
                        <View style={styles.email}>
                            <Text style={styles.textStyle}>Email: </Text>
                            <TextInput
                                placeholderTextColor="white"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.email}>
                            <Text style={styles.textStyle}>Link: </Text>
                            <TextInput
                                // placeholder="Username"
                                placeholderTextColor="white"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                        </View>

                        <TouchableOpacity style={styles.invitebtn}>
                            <Text style={styles.invitetext}>Invite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
                // onPress={() => Alert.alert('AYY')}
            >
                <Text style={styles.textStyle}>Invite</Text>
                <Image
                    source={require('../../assets/invite.png')}
                    style={styles.removeicon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: '50%',
        width: '80%',
        margin: 20,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: 40,
        // paddingHorizontal: 50,
        // paddingVertical: 100,
        alignItems: 'center',
        opacity: 10,
    },
    button: {
        flexDirection: 'row',
        // fontSize: 20,
        borderRadius: 20,
        marginRight: 15,
        textDecorationColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        // alignItems: 'center',
        // height: 25,
    },
    buttonOpen: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingRight: 10,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
    },
    headtext: {
        fontSize: 15,
        color: 'white',
        // fontWeight: '400',
    },

    removeicon: {
        height: 19,
        width: 19,
    },

    email: {
        flexDirection: 'row',
        // textDecorationColor: 'white',
    },

    link: {
        flexDirection: 'row',
    },

    textInput: {
        paddingLeft: 10,
        // paddingRight: 10,
        paddingVertical: 10,

        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        color: 'white',
        width: '70%',
    },

    invitetext: {
        color: 'white',
        fontSize: 20,
    },
    invitebtn: {
        flexDirection: 'row',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        height: 25,
        // left: '20%',
    },
})

export default Modalinvite
