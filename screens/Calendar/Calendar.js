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

const Calendar = () => {
    return (
        <CalendarComponent
        data={[
            {'2021-04-14':{id: '5',title: '14 Item',assignees: 'Turu',assigner: 'Adnan',deadline: 'kal',description: 'KAAM KAROOOO',completed: ''}},
            {'2021-04-15': {id: '4',title: ' 15 Item',assignees: 'Turu',assigner: 'Adnan',deadline: 'kal',description: 'KAAM KAROOOO five',completed: ''}},
            {'2021-04-16': {id: '3',title: '16 Item',assignees: 'Turu',assigner: 'Adnan',deadline: 'kal',description: 'KAAM KAROOOO',completed: ''}},
            {'2021-04-25': {id: '2',title: '25 Item',assignees: 'Turu',assigner: 'Adnan',deadline: 'kal',description: 'KAAM KAROOOO',completed: ''}},
            {'2021-04-14': {id: '1',title: '14 Item',assignees: 'Turu',assigner: 'Adnan',deadline: 'kal',description: 'KAAM KAROOOO',completed: ''}},
        ]}
        />
    )
}

export default Calendar
