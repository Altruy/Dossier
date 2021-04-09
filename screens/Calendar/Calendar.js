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
            {date : "2021-04-14",id: '5',title: '14 Item',user: 'Adnan',duration: 'kal',description: 'KAAM KAROOOO'},
            {date : "2021-04-15",id: '4',title: ' 15 Item',user: 'Adnan',duration: 'kal',description: 'KAAM KAROOOO five'},
            {date : "2021-04-16",id: '3',title: '16 Item',user: 'Adnan',duration: 'kal',description: 'KAAM KAROOOO'},
            {date : "2021-04-25",id: '2',title: '25 Item',user: 'Adnan',duration: 'kal',description: 'KAAM KAROOOO'},
            {date : "2021-04-14",id: '1',title: '14 Item',user: 'Adnan',duration: 'kal',description: 'KAAM KAROOOO'},
        ]}
        />
    )
}

export default Calendar
