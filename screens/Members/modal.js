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
    Clipboard
} from 'react-native'
// import {Clipboard} from '@react-native-community/clipboard'
import Icon2 from "react-native-vector-icons/FontAwesome";

import Feather from 'react-native-vector-icons/Feather'
import { useAuth } from '../../auth_providers/Auth';
import { emailI } from '../../API';

const Modalinvite = ({collab,name}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [text , setText] = useState('')
    const {username} = useAuth()
    const handleCopy =()=>{
        Clipboard.setString(collab)
        Alert.alert('Collab Id copied to clipboard')
    }
    const handleInvite = () =>{
        emailI(text,name,username,collab)
        setModalVisible(false)
        Alert.alert('Invitition has been sent via email')
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(false)
                }}
            >
                <TouchableOpacity activeOpacity={1} 
                    style={{height:'100%',width:'100%',backgroundColor:"rgba(52, 52, 52, 0.8)"}}  
                    onPress={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.head}>
                            <Text style={styles.headtext}>
                                Invite to Collab
                            </Text>
                            <Icon2 style={styles.cross} name="times" size={30} color="white" 
                                onPress={() => setModalVisible(false)} />
                            
                        </View>
                        <View style={styles.email}>
                            <Text style={styles.textStyle}>Email: </Text>
                            <TextInput
                                placeholderTextColor="white"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val)=>setText(val)}
                            />
                        </View>

                        <TouchableOpacity style={styles.email} onPress={()=>handleCopy()}>
                            <Text style={styles.textStyle}>Link: </Text>
                            <Text
                                style={styles.textInput2}
                                autoCapitalize="none"
                            >{collab}
                                
                            </Text>
                            <Feather
                                    name="copy"
                                    color="white"
                                    size={18}
                                    style={styles.copy}
                                />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.invitebtn}
                        onPress ={()=>{
                            
                            if(!text){
                                Alert.alert('Please enter an email address')
                            }
                            else if (text.includes(' ')){
                                Alert.alert('Email cannot contain empty spaces')
                            }
                            else if (!text.includes('@') ||!text.includes('.com') ){
                                Alert.alert('Email is invalid')
                            }
                            else{
                                handleInvite()
                            }
            
                            
                        }}
                        >
                            <Text style={styles.invitetext}>Invite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true) }>
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
        height: 270,
        width: '80%',
        margin: 20,
        justifyContent: 'space-around',
        backgroundColor: 'black',
        borderRadius: 40,
        // paddingHorizontal: 50,
        // paddingVertical: 100,
        alignItems: 'center',
    },
    copy:{
        position:'absolute',
        top:'25%',
        right:'3%'
    },
    button: {
        flexDirection: 'row',
        // fontSize: 20,
        borderRadius: 20,
        textDecorationColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        // alignItems: 'center',
        width: 85,
        right:'2%'
    },
    buttonOpen: {
        backgroundColor: 'rgba(177, 0, 255, 0.5)',
    },
    buttonClose: {
        backgroundColor: 'rgba(2557, 0, 17, 0.5)',
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
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
    },
    headtext: {
        fontSize: 18,
        color: 'white',
        textAlign:'center',
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
        width: '75%',
    },
    textInput2: {
        paddingLeft: 10,
        // paddingRight: 10,
        paddingVertical: 10,
        fontSize:12.6,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        color: 'white',
        width: '75%',
    },

    invitetext: {
        color: 'black',
        fontSize: 16,
        textAlign:'center'
    },
    invitebtn: {
        flexDirection: 'row',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 16.5,
        alignItems: 'center',
        height: 35,
        width:70
        // left: '20%',
    },
    cross: {
        position: "absolute",
        top: '-20%',
        right: "3%",
      },
})

export default Modalinvite
