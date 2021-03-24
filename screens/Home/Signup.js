import React from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SignUp = () => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_emailInputChange: false,
        check_usernameInputChange: false,
        secureTextEntry: true,
    })

    const emailInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data, //destructrung data
                email: val,
                check_emailInputChange: true,
            })
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
            setData({
                ...data, //destructrung data
                email: val,
                check_usernameInputChange: true,
            })
        } else {
            setData({
                ...data,
                email: val,
                check_usernameInputChange: false,
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

    return (
        <View style={styles.container}>
            {/* <View style={styles.top}>
                <TouchableOpacity style={styles.backbutton}>
                    <Feather name="arrow-left" color="white" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>Sign Up</Text>
            </View> */}
            <View style={styles.body}>
                <Text style={styles.text}>Username</Text>
                <View style={styles.act}>
                    {/* <FontAwesome name="user-o" colour="#05375a" size={20} /> */}
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="white"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => usernameInputChange(val)}
                    />
                    {data.check_usernameInputChange ? (
                        <Feather name="check-circle" color="white" size={20} />
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
                        <Feather name="check-circle" color="white" size={20} />
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
                    />
                    <TouchableOpacity onPress={showPassword}>
                        <Feather name="eye-off" color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    style={styles.SignButton}
                    onPress={() => Alert.alert('Signing Up')}
                    // onPress={() => }
                >
                    <Text style={styles.textSign}>Sign Up</Text>
                </TouchableOpacity>
            </View>
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
    },
    top: {
        paddingTop: 20,
        // marginTop: 20,

        // paddingBottom: 10,
        marginBottom: 10,

        height: '15%',
        alignItems: 'center',
        backgroundColor: '#1F0A16',
        flexDirection: 'row',
    },
    backbutton: {
        paddingLeft: 20,
    },

    title: {
        paddingLeft: 95,

        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    body: {
        // paddingTop: 30,
        paddingHorizontal: 20,
        marginTop: 60,
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
        marginTop: 80,

        flexDirection: 'row',
        justifyContent: 'center',
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
        fontSize: 20,
    },
})
