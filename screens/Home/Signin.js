import React, {useEffect} from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Button,
    Pressable,
    Alert,
    StyleSheet
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useAuth} from '../../auth_providers/Auth'

const SignIn = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        validEmail : 'white'
    })
    const { user,username, signIn ,signOut } = useAuth();

    useEffect(() => {
        if (!!username) {
            // signOut()
          navigation.replace("Collabs");
        }
      }, [username]);

    const textInputChange = (val) => {
        if (val.length != 0) {
            if(!val.includes('@') || !val.includes('.com') || val.includes(' '))
            {
                setData({
                ...data, //destructrung data
                email: val,
                check_textInputChange: true,
                validEmail:'white'
            })
            }else{
                setData({
                    ...data, //destructrung data
                    email: val,
                    check_textInputChange: true,
                    validEmail:'green'
                })
            }
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                validEmail:'white'
            })
        }
    }

    const handlePassword = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const showPassword = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const handleSignin = async () => {
        if(data.validEmail!=='green' )
        {
            Alert.alert("Please Enter a valid Email");
        }else if (!data.password) {
            Alert.alert("Please Enter your Password");
        }else{ 
            try {
                await signIn(data.email, data.password);
            } catch (error) {
                Alert.alert(error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.SignIntitle}>Sign In</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Email</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="user-o" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? (
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
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePassword(val)}
                    />
                    <TouchableOpacity onPress={showPassword}>
                        <Feather name="eye-off" color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttoncontainer}>
                <View>
                    <TouchableOpacity
                        style={styles.SignButton}

                        onPress={handleSignin}
                    >
                        <Text style={styles.textSign}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Forget_SignUpButton}>
                    <TouchableOpacity
                        onPress={() => Alert.alert('Forgot')}
                        // onPress={() => }
                    >
                        <Text style={styles.textSign}>Forgot Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.textSign}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

SignIn.navigationOptions = {
    headerTitle: 'Sign In',
}

export default SignIn

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
    },
    backbutton: {
        paddingLeft: 20,
    },

    SignUptitle: {
        paddingLeft: 95,

        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    SignIntitle: {
        marginLeft: 150,

        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        // justifyContent: 'center',
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
