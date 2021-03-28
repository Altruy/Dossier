import React from "react";
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
  TextInput
} from "react-native";
import Calen from "./Calendar"
const Test_Calendar =() =>{
    return(
        <ImageBackground
        source={require("../assets/Calendar-background.png")}
        style={styles.image}
      >
        <View>
        <View style={{marginTop:25}}><Calen 
            data={[{'2021-03-14':"today we eat"},{'2021-03-15':"today we have fun"},{'2021-03-16':'yo bye'},
            {'2021-03-25':"today we eat"},{'2021-03-14':"today we eat"}]}
        />
        </View>
            
        </View>
        </ImageBackground>
    );
}
const styles= StyleSheet.create({
    image: {
        // flex: 1,
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        overflow: "hidden",
      },
})
export default Test_Calendar;