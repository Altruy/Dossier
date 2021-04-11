import React from 'react'
import {View, Text, Image, Button, StyleSheet, ScrollView, ImageBackground} from 'react-native'

import TopBar from '../../components/TopBar'
import CalendarNav from '../../navigation/CalenderNav'

const Calendar = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../../assets/Calendar-background.png')}
            style={styles.image}
        >
            <TopBar navigation={navigation} title={'Calendar'} />
            <CalendarNav/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        // flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
})

export default Calendar
