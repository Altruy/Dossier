import DatePicker from 'react-native-datepicker'
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
const Date_picker =() =>{
    const [date,setdate] = React.useState("04-07-2021")
    return(
        <View style ={{marginTop : 100,marginLeft:25}}>
<DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="04-07-2021"
        
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setdate(date)}
      />
      </View>
    );

}
export default Date_picker;