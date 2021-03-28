import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Roleicon from './Roleicon'

const Member = ({data}) => {
    const {Name, Role} = data
    const [showRole, setShowRole] = useState(false)

    return (
        <View style={styles.item}>
            <Text style={styles.names}> {data.key} </Text>
            <Roleicon
                data={[
                    {key: 'owner'},
                    {key: 'admin'},
                    {key: 'a'},
                    {key: 's'},
                    {key: 'admin'},
                    {key: 'admin'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'admin'},
                    {key: 'Julie'},
                    {key: 'asdsad'},
                    {key: 'Dasn'},
                    {key: 'admin'},
                    {key: 'admin'},
                    {key: 'admin'},
                    {key: 'admin'},
                    {key: 'admin'},
                    {key: 'Jisllian'},
                    {key: 'Jismmy'},
                    {key: 'Juslie'},
                ]}
            />
            <TouchableOpacity
                style={styles.removebtn}
                // onPress={() => Alert.alert('AYY')}
            >
                <Text style={styles.btntext}>Remove</Text>
                <Image
                    source={require('../../assets/remove.png')}
                    style={styles.removeicon}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Member

const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',

        color: 'white',
        flexDirection: 'row',

        paddingLeft: 20,
        paddingVertical: 10,
    },

    names: {
        color: 'white',
        // paddingRight: 10,
        alignSelf: 'flex-start',
        fontSize: 18,
    },

    roleOwner: {
        color: 'white',
        alignSelf: 'flex-end',
    },
    btntext: {
        color: 'white',
        paddingRight: 10,
        alignContent: 'center',
        paddingTop: 3,
        // marginVertical: 10,
    },
    removebtn: {
        flexDirection: 'row',
        fontSize: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,

        alignSelf: 'flex-end',
        height: 25,

        // alignContent: 'center',
        paddingHorizontal: 10,
        // paddingVertical: 6,
    },

    removeicon: {
        marginTop: 3,
        height: 19,
        width: 19,
    },
})
