import React, {useState, useEffect} from 'react'
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

import Icon from "react-native-vector-icons/Ionicons";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { getEvents } from '../../API'
import { useAuth } from '../../auth_providers/Auth'
import Task_expanded from './Task_expanded'

const Calenda = ({ navigation}) => {
    const [show, setShowState] = useState(false)
    const nextDays = []
    const [tasks, settasks] = useState([])
    const [show_date, setdate] = useState('')
    const [Date, setDate] = useState('')
    const [Month, setMonth] = useState('')
    const [mon, setmon] = useState(new window.Date().getMonth()+1)
    const [year, setyear] = useState(new window.Date().getFullYear())
    const [data, setdata] = useState([])
    const [ad,setad] = useState(false)
    const {collabId} = useAuth()

    useEffect(() => {
        getEvents(collabId,year,mon).then((val)=>setdata(val.map((v)=>{
          let dat = new window.Date(parseInt(v.date['$date']['$numberLong']))
          let year = dat.getFullYear()
          let month = dat.getMonth()+1
          let date = dat.getDate()
          let hrs = dat.getHours().toString()
          let mins = dat.getMinutes().toString()
          year=year.toString()
          month=month.toString()
          date=date.toString()
          let ret = `${year}-${(month.length===1)?'0'+month:month}-${(date.length===1)?'0'+date:date}`
          let tim = `${(hrs.length===1)?'0'+hrs:hrs} : ${(mins.length===1)?'0'+mins:mins}`
          return ({...v,date:ret,time:tim})
        })))
    }, [mon,year,ad])

    useEffect(() => {
        if(navigation.getParam('ad'))
        {
            setad(!ad)
        }
    }, [navigation])

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
                        setDate(dayName)
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
                        setmon(month.month)
                        setyear(month.year)
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
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateEvent')}
                style={styles.btn}
                >
                <Icon name="add" size={30} color="white"  />
            </TouchableOpacity>
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
    btn: {
        position:'absolute',
        fontSize: 15,
        width: 60,
        height: 60,
        backgroundColor: '#B100FF',
        borderRadius: 50,
        bottom:'5%',
        right:'10%',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        
      },
})
export default Calenda