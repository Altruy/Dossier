import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import React, {useState} from 'react'
import Task_expanded from './Task_expanded'
import CreateEvent from './CreateEvent'

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
} from 'react-native'

const Calen = ({data, navigation}) => {
    const [show, setShowState] = useState(false)
    const nextDays = []
    const [tasks, settasks] = useState([])
    const [show_date, setdate] = useState('')
    const [Date, setDate] = useState('')
    const [Month, setMonth] = useState('')
    
    data.forEach((day) => {
       
            nextDays.push(day.date)
            
        
    })
    let newDaysObject = {}
    nextDays.forEach((day) => {
        newDaysObject[day] = {
            marked: true,
        }
    })

    return (
        <ImageBackground
            source={require('../../assets/Calendar-background.png')}
            style={styles.image}
        >
            <View style={styles.container}>
                <Calendar
                    onDayPress={(day) => {
                        let arr = []
                        setdate(day.dateString)
                        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        var theMonths = [' ',"January", "February", "March", "April", "May",
                                         "June", "July", "August", "September", "October", "November", "December"];
                        
                        var d = new window.Date(day.dateString);
                        var dayName = days[d.getDay()];
                        dayName = dayName + " " + day.day+"th"
                        var month = theMonths[day.month]
                        setMonth(month +" " + day.day +"," +" "+day.year)
                        console.log("sdsdsdsds",dayName); // the Day
                        setDate(dayName)
                        console.log(day)
                        data.map((item) => {
                            if (day.dateString === item.date){
                                arr.push(item)
                                
                            }
                        })
                        if (show === true && day.dateString === show_date) {
                            setShowState(false)
                        } else if (show === false) {
                            setShowState(true)
                        }
                        settasks(arr)
                    }}
                    onMonthChange={(month) => {
                        console.log('month changed', month)
                    }}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    onPressArrowLeft={(subtractMonth) => subtractMonth()}
                    onPressArrowRight={(addMonth) => addMonth()}
                    enableSwipeMonths={true}
                    markedDates={newDaysObject}
                    theme={{
                        backgroundColor: 'transparent',
                        calendarBackground: 'transparent',
                        textSectionTitleColor: '#ffffff',
                        textSectionTitleDisabledColor: '#ffffff',
                        selectedDayBackgroundColor: '#ffffff',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#ffffff',
                        textDisabledColor: '#ffffff',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: '#ffffff',
                        disabledArrowColor: '#ffffff',
                        monthTextColor: '#ffffff',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                    }}
                />
                <Task_expanded
                    show={show}
                    DATA={tasks}
                    navigation={navigation}
                    date = {Date}
                    month ={Month}
                />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
    },
    image: {
        // flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
})
export default Calen
