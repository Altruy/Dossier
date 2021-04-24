import React from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet,
    ScrollView
} from 'react-native'
import { signup } from '../../API'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const SignUp = ({navigation}) => {
    const [data, setData] = React.useState({
        username : '',
        email: '',
        password: '',
        password2: '',
        check_emailInputChange: false,
        check_usernameInputChange: false,
        secureTextEntry: true,
        secureTextEntry2: true,
        validEmail:'white',
        validUser:'white'
    })
    
    const handleSignUp = async () => {
        const {username, email, password, password2} = data
        if(!username){
            Alert.alert('Please Enter a Username');
        }
        else if(username.length>10){
            Alert.alert('Username is too long. It can only be upto 10 characters');
        }
        else if(!email || !email.includes('@') || !email.includes('.com') || email.includes(' ')){
            Alert.alert('Please Enter a valid Email');
        }
        else if (password.length < 5 || !password2){
            Alert.alert('Please enter a password of atleast 5 characters')
        }
        else if (password !== password2)
        {
            Alert.alert('Paswords do not match');
        }
        else {
            try {
                if(await signup(data.email, data.password,data.username)===null){
                    Alert.alert("Username or email already exists");
                }
                else {
                    Alert.alert("Successfully Signed Up");

                }
            } catch (error) {
                Alert.alert(error);
                navigation.navigate('SignIn')
            }
        }
    }

    const emailInputChange = (val) => {
        if (val.length != 0) {
            if(!val.includes('@') || !val.includes('.com') || val.includes(' '))
            {
                setData({
                ...data, //destructrung data
                email: val,
                check_emailInputChange: true,
                validEmail:'white'
            })
            }else {
                setData({
                    ...data, //destructrung data
                    email: val,
                    check_emailInputChange: true,
                    validEmail:'green'
                })
            }
            
        } else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false,
            })
        }
    }
    const usernameInputChange = (val) => {
        if (val.length != 0) {
            if(val.includes(' ') || val.length<5){
                setData({
                    ...data, //destructrung data
                    username: val,
                    check_usernameInputChange: true,
                    validUser:'white'
                })
            }else {
                setData({
                    ...data, //destructrung data
                    username: val,
                    check_usernameInputChange: true,
                    validUser:'green'
                })
            }
           
        } else {
            setData({
                ...data,
                email: val,
                check_usernameInputChange: false,
                validUser:'white'
            })
        }
    }

    const handlePassword = (val) => {
        setData({
            ...data,
            password: val,
        })
    }
    const handlePassword2 = (val) => {
        setData({
            ...data,
            password2: val,
        })
    }

    const showPassword = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }
    const showPassword2 = () => {
        setData({
            ...data,
            secureTextEntry2: !data.secureTextEntry2,
        })
    }

    return (
        <View style={styles.container}>
        <ScrollView style={{color:'purple'}}>
            <View style={styles.top}>
                <TouchableOpacity >
                    <View style={styles.backbutton}>
                        <Feather name="arrow-left" color="white" size={30} 
                    onPress={()=>navigation.goBack()}/>
                    </View>
                </TouchableOpacity>
                    <Text style={styles.title}>Sign Up</Text>
                
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Username</Text>
                <View style={styles.act}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => usernameInputChange(val)}
                    />
                    {data.check_usernameInputChange ? (
                        <Feather name="check-circle" color={data.validUser} size={20} />
                    ) : null}
                </View>
                <Text style={styles.text}>Email</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="user-o" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => emailInputChange(val)}
                    />
                    {data.check_emailInputChange ? (
                        <Feather name="check-circle" color={data.validEmail} size={20} />
                    ) : null}
                </View>
                <Text style={styles.text}>Password</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="lock" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePassword(val)}
                        secureTextEntry={data.secureTextEntry ? true : false}
                    />
                    <TouchableOpacity onPress={showPassword}>
                        <Feather name="eye-off" color="white" size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Confirm Password</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="lock" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePassword2(val)}
                        secureTextEntry={data.secureTextEntry2 ? true : false}
                    />
                    <TouchableOpacity onPress={showPassword2}>
                        <Feather name="eye-off" color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    
                    onPress={() => Alert.alert('Signing Up')}
                    onPress={() => handleSignUp()}
                >
                    <View style={styles.SignButton}>
                    <Text style={styles.textSign}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    )
}
SignUp.navigationOptions = {
    headerTitle: 'Sign Up',
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#341024',
        height:'100%'
    },
    top: {
        paddingTop: '20%',
        // marginTop: 20,
        // paddingBottom: 10,
        height: '20%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backbutton: {
        paddingLeft: '30%',
        width:'50%'
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    body: {
        // paddingTop: 30,
        paddingHorizontal: 20,
        marginTop: '10%',
        flex: 0.8,
        justifyContent: 'center',

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
        fontSize:18,
        marginHorizontal: 19,
    },

    textInput: {
        paddingLeft: 10,
        // paddingRight: 10,
        color: 'white',
        width: '90%',
    },

    buttoncontainer: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        height:60
        // alignItems: 'center',
    },

    SignButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,

        backgroundColor: '#1F0A16',
        borderRadius: 40,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    Forget_SignUpButton: {
        // elevation: 10,
        paddingTop: 20,
        paddingHorizontal: 40,

        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
})
