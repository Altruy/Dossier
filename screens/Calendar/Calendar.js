import React from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    TextInput,
} from 'react-native'
import CalendarComponent from './CalendarComponent'

const Calendar = ({navigation}) => {
    return (
        <CalendarComponent
            data={[
                {'2021-04-14': 'today we eat'},
                {'2021-04-15': 'today we have fun'},
                {'2021-04-16': 'yo bye'},
                {'2021-04-25': 'today we eat'},
                {'2021-04-14': 'today we eat'},
            ]}
            navigation={navigation}
        />
    )
}

export default Calendar
