import React from 'react'
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
} from 'react-native'
import { Title } from 'react-native-paper'

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

const CreateTasks = ({navigation}) => {
    const [title, setTitle] = React.useState('')
    const [Date, setDate] = React.useState('')
    const [Time, setTime] = React.useState('')
    const [Duration, setDuration] = React.useState('')
    const [Desription, setDescription] = React.useState('')
    
    const onChangeTitle = (query) => setTitle(query)
    const onChangeDate = (query) => setDate(query)
    const onChangeTime = (query) => setTime(query)
    const onChangeDuration = (query) => setDuration(query)
    const onChangeDescription = (query) => setDescription(query)
    

    return (
        <ImageBackground
            source={require('../../assets/Notification-background.png')}
            style={styles.image}
        >
            <KeyboardAvoidingView>
                <ScrollView
                    keyboardShouldPersistTaps={'always'}
                    // style={styles.container}
                    contentContainerStyle={styles.block}
                    // showsVerticalScrollIndicator={false}
                >
                    <View style={styles.sblock}>
                        <Text style={styles.text}> Add Title</Text>

                        <TextInput style={styles.input} onChangeText ={(value) => onChangeTitle(value)}/>
                    </View>

                    <View style={styles.sblock}>
                        <Text style={styles.text}> Add Date</Text>

                        <TextInput style={styles.input} onChangeText ={(value) => onChangeDate(value)}/>
                    </View>
                    <View style={styles.sblock}>
                        <Text style={styles.text}> Add Time</Text>

                        <TextInput style={styles.input} onChangeText ={(value) => onChangeTime(value)} />
                    </View>
                    <View style={styles.sblock}>
                        <Text style={styles.text}> Add Duration</Text>

                        <TextInput style={styles.input} onChangeText ={(value) => onChangeDuration(value)} />
                    </View>

                    <View style={styles.tblock}>
                        <Text style={styles.text}> Add Description</Text>
                        <TextInput
                            style={styles.dinput}
                            textAlignVertical="top"
                            multiline={true}
                            onChangeText ={(value) => onChangeDescription(value)}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                //navigation.goBack()
                                console.log(Title,Date,Time,Duration,Desription)
                            }}
                            style={styles.btn}
                        >
                            <Text style={styles.textbtn}>Create Note</Text>
                        </TouchableOpacity>
                    </View>

                    <View></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    container: {
        // flex: 1,
        // paddingTop: 10,
        // top: '20%',
        // height: '100%',
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // opacity: 0.5,
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderRadius: 8,
        margin: 10,
        width: '95%',
        // alignSelf: 'center',
        fontSize: 18,
        color: 'white',
    },
    dinput: {
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // opacity: 0.5,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 8,
        margin: 10,
        width: '95%',
        height: '40%',
        fontSize: 18,
        // alignSelf: 'center',
        color: 'white',
    },
    text: {
        marginTop: 5,
        color: 'white',
        fontSize: 18,
        // alignSelf: 'flex-start',
    },
    // assignee: {
    //     color: 'white',
    // },
    // deadline: {
    //     color: 'white',
    // },
    // desc: {
    //     color: 'white',
    // },
    block: {
        // flex: 1,
        paddingBottom: 120,
        paddingTop: 40,
        paddingHorizontal: 15,
        // height: '100%',
        // justifyContent: 'flex-start',
        // top: '20%',
        // bottom: '20%',
        // left: '10%',
        // alignContent: 'center',
        // width: ,
        // alignItems: 'center',
    },
    sblock: {
        // top: '5%',
        width: '100%',
        // alignContent: 'center',
        // alignItems: 'center',
    },
    tblock: {
        width: '100%',
        //     // top: '10%',
        // alignContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
    },
    btn: {
        // position: 'relative',
        // left: '40%',
        // top: 15,
        // marginHorizontal: 30,
        // paddingHorizontal: 20,
        marginTop: 5,
        alignSelf: 'center',
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '38%',
        height: '14%',
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // align,
    },
    textbtn: {
        color: 'white',
        fontSize: 20,
    },
    icon: {
        left: 190,
    },
})

export default CreateTasks

// import React, {useState} from 'react'
// import {
//     Alert,
//     Modal,
//     StyleSheet,
//     Text,
//     Pressable,
//     TouchableOpacity,
//     View,
//     Image,
//     TextInput,
//     ImageBackground,
//     KeyboardAvoidingView,
// } from 'react-native'

// import Repeat from './CheckBox'

// import Feather from 'react-native-vector-icons/Feather'
// import {BackgroundImage} from 'react-native-elements/dist/config'
// const CreateEvent = ({navigation}) => {
//     return (
//         <View>
//             <ImageBackground
//                 source={require('../../assets/Calendar-background.png')}
//                 style={styles.image}
//             >
//                 <KeyboardAvoidingView style={styles.container}>
//                     <View style={styles.modalView}>
//                         {/* <View style={styles.head}>
//                             <Text style={styles.headtext}>
//                                 Create New Event
//                             </Text>

//                             <Feather
//                                 name="left-arrow"
//                                 color="white"
//                                 // onPress={() => }
//                                 size={18}
//                             ></Feather>
//                         </View> */}
//                         <View style={styles.body}>
//                             <View style={styles.object}>
//                                 <Text style={styles.textStyle}>Add Title </Text>
//                                 <TextInput
//                                     placeholderTextColor="white"
//                                     style={styles.textInput}
//                                     autoCapitalize="none"
//                                 />
//                             </View>
//                             <View style={styles.object}>
//                                 <Text style={styles.textStyle}>Add Date </Text>
//                                 <TextInput
//                                     placeholderTextColor="white"
//                                     style={styles.textInput}
//                                     autoCapitalize="none"
//                                 />
//                             </View>
//                             <View style={styles.object}>
//                                 <Text style={styles.textStyle}>Add Time </Text>
//                                 <TextInput
//                                     placeholderTextColor="white"
//                                     style={styles.textInput}
//                                     autoCapitalize="none"
//                                 />
//                             </View>
//                             <View style={styles.object}>
//                                 <Text style={styles.textStyle}>
//                                     Add Duration{' '}
//                                 </Text>
//                                 <TextInput
//                                     placeholderTextColor="white"
//                                     style={styles.textInput}
//                                     autoCapitalize="none"
//                                 />
//                             </View>
//                             <View style={styles.object}>
//                                 <Text style={styles.textStyle}>
//                                     Add Description
//                                 </Text>
//                                 <TextInput
//                                     placeholderTextColor="white"
//                                     style={styles.textInput}
//                                     autoCapitalize="none"
//                                 />
//                             </View>
//                             {/* <Text
//                                 style={{
//                                     paddingTop: 20,
//                                     color: 'white',
//                                     fontSize: 15,
//                                 }}
//                             >
//                                 Repeat
//                             </Text>
//                             <View style={styles.checkboxcontainer}>
//                                 <View style={styles.checkBox}>
//                                     <Repeat day="Mo" uncheckedColor="white" />
//                                     <Repeat day="Tu" />
//                                     <Repeat day="We" />
//                                     <Repeat day="Th" />
//                                     <Repeat day="Fr" />
//                                     <Repeat day="Sa" />
//                                     <Repeat day="Su" />
//                                 </View>
//                             </View> */}
//                         </View>

//                         <TouchableOpacity style={styles.createbutton}>
//                             <Text style={styles.CreateButtonText}>
//                                 Create Event
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </KeyboardAvoidingView>
//             </ImageBackground>
//         </View>
//     )

//     {
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     image: {
//         //flex: 1,
//         height: '100%',
//         width: '100%',
//         resizeMode: 'cover',
//         overflow: 'hidden',
//     },
//     modalView: {
//         // flex: 0.6,
//         // marginTop: 60,
//         // height: '80%',
//         // width: '90%',
//         // marginHorizontal: 20,
//         justifyContent: 'space-between',
//         // backgroundColor: 'black',
//         borderRadius: 20,
//         // paddingHorizontal: 20,
//         // paddingBottom: 10,
//         alignItems: 'center',
//         opacity: 0.95,
//         paddingVertical: 12,
//     },

//     head: {
//         flexDirection: 'row',

//         // marginHorizontal: 60,
//         // justifyContent: 'space-between',
//         // width: '80%',
//         // paddingTop: 10,
//         // paddingBottom: 10,
//     },
//     body: {
//         width: '80%',
//         // paddingBottom: 10,
//         // marginTop: 10,
//     },
//     object: {
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         paddingVertical: 12,

//         textDecorationColor: 'white',
//     },
//     checkboxcontainer: {
//         alignSelf: 'center',
//         // paddingTop: 10,
//     },

//     checkBox: {
//         flexDirection: 'row',
//         color: 'white',

//         // alignSelf: 'center',
//     },

//     button: {
//         flexDirection: 'row',
//         // fontSize: 20,
//         borderRadius: 20,
//         // marginRight: 15,
//         textDecorationColor: 'white',
//         // paddingHorizontal: 10,
//         // paddingVertical: 5,
//         // alignItems: 'center',
//         // height: 25,
//     },
//     buttonOpen: {
//         backgroundColor: 'rgba(0, 0, 0, 0.9)',
//     },
//     buttonClose: {
//         backgroundColor: '#2196F3',
//     },
//     textStyle: {
//         color: 'white',
//         fontSize: 15,
//         justifyContent: 'flex-start',
//         textAlignVertical: 'center',
//         // paddingRight: 10,
//     },
//     modalText: {
//         // marginBottom: 15,
//         // textAlign: 'center',
//     },

//     headtext: {
//         fontSize: 20,
//         color: 'white',
//         fontWeight: 'bold',
//         marginRight: 150,
//     },

//     removeicon: {
//         height: 19,
//         width: 19,
//     },

//     link: {
//         flexDirection: 'row',
//     },

//     textInput: {
//         // width: 15,
//         // paddingHorizontal: 5,
//         // paddingRight: 10,
//         // paddingVertical: 5,
//         backgroundColor: 'rgba(0, 0, 0, 0.9)',
//         // borderColor: 'white',
//         // borderWidth: 1,
//         borderRadius: 5,
//         color: 'white',
//         width: '70%',
//     },

//     CreateButtonText: {
//         color: 'white',
//         fontSize: 20,
//     },
//     createbutton: {
//         flexDirection: 'row',
//         fontSize: 20,
//         borderWidth: 1,
//         borderColor: 'white',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         borderRadius: 30,
//         paddingHorizontal: 30,
//         // paddingVertical: 20,
//         alignItems: 'center',
//         marginTop: 20,
//         height: 35,
//         // left: '20%',
//     },
// })

// export default CreateEvent
