import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

const Roleicon = ({data}) => {
    const role = data.key
    const [showRole, setShowRole] = useState(false)
    const roleID = (role) => {
        if (role === 'admin') {
            return (
                <View style={styles.item}>
                    <TouchableOpacity
                        style={styles.roleAdmin}
                        // onPress={() => Alert.alert('AYY')}
                    >
                        <Text style={styles.btntext}>Admin</Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (role === 'owner') {
            return (
                <View style={styles.item}>
                    <TouchableOpacity
                        style={styles.roleOwner}
                        // onPress={() => Alert.alert('AYY')}
                    >
                        <Text style={styles.btntext}>Owner</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return null
        }
    }

    return roleID(role)
}

export default Roleicon

const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',

        color: 'white',
        flexDirection: 'row',

        paddingLeft: 20,
        // paddingVertical: 10,
    },

    roleOwner: {
        backgroundColor: '#212068',
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
    },

    roleAdmin: {
        backgroundColor: '#3F1851',
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 20,
    },

    btntext: {
        color: 'white',
        // paddingRight: 10,
        alignContent: 'center',
        paddingBottom: 3,
        // marginVertical: 10,
    },
})
