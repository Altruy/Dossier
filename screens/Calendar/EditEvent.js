import React from 'react'
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native'

const EditEvent = () => {
    return (
        <View style={styles.container}>
            <Text>The Edit Event Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default EditEvent
