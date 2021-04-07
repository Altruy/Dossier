import React from 'react'
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native'

import CalenderComponent from '../../components/Test_Calendar'
import TaskExpandedComponent from '../../components/Task_expanded'
// import CalenderComponent from '../../components/Test_Calendar'

const Calendar = () => {
    return (
        <View style={styles.container}>
            <CalenderComponent />
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

export default Calendar
