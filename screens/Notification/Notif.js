import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
// import Roleicon from './Roleicon'

const Member = ({notifs}) => {
    const {date, data} = notifs
    const [showRole, setShowRole] = useState(false)
    let dat = new Date(parseInt(date['$date']['$numberLong'])).toString()
    let toShow = dat.slice(0,dat.indexOf('GMT'))

    return (
        <View style={styles.item}>
            <Text style={styles.date}>
                {toShow} {':'}
            </Text>
            <Text style={styles.notif}> {data} </Text>
        </View>
    )
}


export default Member

const styles = StyleSheet.create({
    item: {
        justifyContent: 'flex-start',
        color: 'white',
        height:60,
        paddingLeft: 20,
    },

    date: {
        color: 'white',
        // paddingRight: 10,
        alignSelf: 'flex-start',
        fontSize: 16,
    },
    notif: {
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
