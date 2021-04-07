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
    ImageBackground,
    KeyboardAvoidingView,
} from 'react-native'

import Repeat from './CheckBox'

import Feather from 'react-native-vector-icons/Feather'
import {BackgroundImage} from 'react-native-elements/dist/config'
const CreateEvent = ({navigation}) => {
    return (
        <View>
            <ImageBackground
                source={require('../../assets/Calendar-background.png')}
                style={styles.image}
            >
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.modalView}>
                        {/* <View style={styles.head}>
                            <Text style={styles.headtext}>
                                Create New Event
                            </Text>

                            <Feather
                                name="left-arrow"
                                color="white"
                                // onPress={() => }
                                size={18}
                            ></Feather>
                        </View> */}
                        <View style={styles.body}>
                            <View style={styles.object}>
                                <Text style={styles.textStyle}>Add Title </Text>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.object}>
                                <Text style={styles.textStyle}>Add Date </Text>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.object}>
                                <Text style={styles.textStyle}>Add Time </Text>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.object}>
                                <Text style={styles.textStyle}>
                                    Add Duration{' '}
                                </Text>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.object}>
                                <Text style={styles.textStyle}>
                                    Add Description
                                </Text>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            {/* <Text
                                style={{
                                    paddingTop: 20,
                                    color: 'white',
                                    fontSize: 15,
                                }}
                            >
                                Repeat
                            </Text>
                            <View style={styles.checkboxcontainer}>
                                <View style={styles.checkBox}>
                                    <Repeat day="Mo" uncheckedColor="white" />
                                    <Repeat day="Tu" />
                                    <Repeat day="We" />
                                    <Repeat day="Th" />
                                    <Repeat day="Fr" />
                                    <Repeat day="Sa" />
                                    <Repeat day="Su" />
                                </View>
                            </View> */}
                        </View>

                        <TouchableOpacity style={styles.createbutton}>
                            <Text style={styles.CreateButtonText}>
                                Create Event
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )

    {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        //flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    modalView: {
        // flex: 0.6,
        // marginTop: 60,
        // height: '80%',
        // width: '90%',
        // marginHorizontal: 20,
        justifyContent: 'space-between',
        // backgroundColor: 'black',
        borderRadius: 20,
        // paddingHorizontal: 20,
        // paddingBottom: 10,
        alignItems: 'center',
        opacity: 0.95,
        paddingVertical: 12,
    },

    head: {
        flexDirection: 'row',

        // marginHorizontal: 60,
        // justifyContent: 'space-between',
        // width: '80%',
        // paddingTop: 10,
        // paddingBottom: 10,
    },
    body: {
        width: '80%',
        // paddingBottom: 10,
        // marginTop: 10,
    },
    object: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 12,

        textDecorationColor: 'white',
    },
    checkboxcontainer: {
        alignSelf: 'center',
        // paddingTop: 10,
    },

    checkBox: {
        flexDirection: 'row',
        color: 'white',

        // alignSelf: 'center',
    },

    button: {
        flexDirection: 'row',
        // fontSize: 20,
        borderRadius: 20,
        // marginRight: 15,
        textDecorationColor: 'white',
        // paddingHorizontal: 10,
        // paddingVertical: 5,
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
        justifyContent: 'flex-start',
        textAlignVertical: 'center',
        // paddingRight: 10,
    },
    modalText: {
        // marginBottom: 15,
        // textAlign: 'center',
    },

    headtext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 150,
    },

    removeicon: {
        height: 19,
        width: 19,
    },

    link: {
        flexDirection: 'row',
    },

    textInput: {
        // width: 15,
        // paddingHorizontal: 5,
        // paddingRight: 10,
        // paddingVertical: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        // borderColor: 'white',
        // borderWidth: 1,
        borderRadius: 5,
        color: 'white',
        width: '70%',
    },

    CreateButtonText: {
        color: 'white',
        fontSize: 20,
    },
    createbutton: {
        flexDirection: 'row',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        paddingHorizontal: 30,
        // paddingVertical: 20,
        alignItems: 'center',
        marginTop: 20,
        height: 35,
        // left: '20%',
    },
})

export default CreateEvent
