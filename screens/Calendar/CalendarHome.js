import React from 'react'
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native'

import TaskExpandedComponent from '../../components/Task_expanded'
// import CalenderComponent from '../../components/Test_Calendar'
import CalendarCom from '../../components/Calendar'
import TopBar from '../../components/TopBar'
import CalendarNav from '../../navigation/CalenderNav'

const Calendar = () => {
    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} title={'Calendar'} />
            <CalendarNav/>
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
