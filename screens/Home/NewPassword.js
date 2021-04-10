import React, {useEffect} from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Button,
    Pressable,
    ScrollView,
    Alert,
    StyleSheet
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {KeyboardAvoidingView, Platform,} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { changepwd } from '../../API';
import { useAuth } from '../../auth_providers/Auth';

const NewPassword = ({navigation}) => {
    const [data, setData] = React.useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        check_textInputChange: false,
        secureTextEntry1: true,
        secureTextEntry2: true,
        secureTextEntry3: true,
        validEmail : 'white',
        error:''
    })
    const { password , email , setPassword  } = useAuth()

 
    const handleOldPassword = (val) => {
        setData({
            ...data,
            oldPassword: val,
        })
    }
    const handleNewPassword = (val) => {
        setData({
            ...data,
            newPassword: val,
        })
    }
    const handleConfirmNewPassword = (val) => {
        setData({
            ...data,
            confirmNewPassword: val,
        })
    }
    const showPassword1 = () => {
        setData({
            ...data,
            secureTextEntry1: !data.secureTextEntry1,
        })
    }
    const showPassword2 = () => {
        setData({
            ...data,
            secureTextEntry2: !data.secureTextEntry2,
        })
    }
    const showPassword3 = () => {
        setData({
            ...data,
            secureTextEntry3: !data.secureTextEntry3,
        })
    }

    const check = async () =>{
        if (data.confirmNewPassword !== data.newPassword){
            Alert.alert("The Paswords donot match ")
        }
        else if (data.oldPassword === data.newPassword){
            Alert.alert("Your current password and new password cannot be the same ")
        }
        else if(data.oldPassword !== password){
            Alert.alert("Your current password is incorrect")
        }
        else{
            if(await changepwd(email,data.confirmNewPassword)){
                Alert.alert("Password Successfully changed")
                setPassword(data.confirmNewPassword)
                navigation.replace("Collabs");
            }

        }
    }
    const keyboardVerticalOffset =  0
    return (
        
        <View style={styles.container}>
            
            <View style={styles.top}>
                <Text style={styles.SignIntitle}>New Password</Text>
            </View>
            <KeyboardAvoidingView
        keyboardVerticalOffset={-600} behavior="padding">
            <ScrollView>
            <View style={styles.body}>
                <Text style={styles.text}>Current Password</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="lock" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Current Password"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry1 ? true : false}
                        onChangeText={(val) => handleOldPassword(val)}
                    />
                    <TouchableOpacity onPress={showPassword1}>
                        <Feather name="eye-off" color={data.secureTextEntry1 ? 'white' : 'green'} size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>New Password</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="lock" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="New Password"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry2 ? true : false}
                        onChangeText={(val) => handleNewPassword(val)}
                    />
                    <TouchableOpacity onPress={showPassword2}>
                        <Feather name="eye-off" color={data.secureTextEntry2 ? 'white' : 'green'} size={20} />
                    </TouchableOpacity>
                </View>
            
                <Text style={styles.text}>Confirm New Password</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="lock" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Confirm New Password"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry3 ? true : false}
                        onChangeText={(val) =>  handleConfirmNewPassword(val)}
                    />
                    <TouchableOpacity onPress={showPassword3}>
                        <Feather name="eye-off" color={data.secureTextEntry3 ? 'white' : 'green'} size={20} />
                    </TouchableOpacity>
                </View>
                
            </View>
          
            <View style={styles.buttoncontainer}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                        style={styles.SignButton}

                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.textSign}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.SignButton}

                        onPress={() => check()}
                    >
                        <Text style={styles.textSign}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
       
    )
}

// SignIn.navigationOptions = {
//     headerTitle: 'Sign In',
// }

export default NewPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#341024',
    },
    top: {
        paddingTop: '12%',
        // marginTop: 20,

        // paddingBottom: 10,

        height: '17%',
        alignItems: 'center',
        flexDirection: 'row',
        //position:'absolute',
        marginTop:15
    },
    backbutton: {
        paddingLeft: 20,
    },

    SignIntitle: {
        marginLeft: 65,
        position: 'absolute',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        //alignContent:'center'
        //justifyContent: 'center',
    },

    body: {
        // paddingTop: 30,
        paddingHorizontal: 20,
        flex: 0.8,
        justifyContent: 'center',

        backgroundColor: '#341024',
    },

    act: {
        marginTop: 5,
        marginBottom: 15,
        // marginBottom: 10,
        marginHorizontal: 19,

        paddingRight: 20,

        height: 48,

        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: '#1F0A16',
    },

    text: {
        color: 'white',
        marginTop: 5,
        fontSize: 24,
        marginHorizontal: 19,
    },

    textInput: {
        paddingLeft: 10,
        // paddingRight: 10,
        color: 'white',
        width: '90%',
    },

    buttoncontainer: {
        // marginTop: 60,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    SignButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,

        margin: 10,
        maxWidth: 150,
        backgroundColor: '#1F0A16',
        borderRadius: 40,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    Forget_SignUpButton: {
        // elevation: 10,
        // paddingTop: 20,
        // paddingRight: 10,
        flexDirection: 'row',
        // borderRadius: 40,
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
    },

    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 10,
    },
})