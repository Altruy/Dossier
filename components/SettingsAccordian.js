import React, { useState } from "react";
import { ToggleButton } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import Toggle from 'react-native-toggle-element';
import data from "../data/settings-data";

export default SettingsAccordian= ({ data }) => {
    // const [status, setStatus] = useState('checked');
  
    // const onButtonToggle = value => {
    //   setStatus(status === 'checked' ? 'unchecked' : 'checked');
    // };
    const [toggleValue, setToggleValue] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const {
    title,
    all,
    chat,
  } = data;
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "4.5%",
          opacity: 0.2,
        }}
      />
    );
  };
  return (
    <TouchableOpacity
      style={styles.accordian}
      onPress={() => setShowInfo(!showInfo)}
    >
      <View style={styles.box}>
        <View style={styles.dropdown}>
          <Text style={styles.title}>{title}</Text>
          {showInfo ? (
          <Icon name="angle-up" size={25} style={styles.times} color="white" />
        ) : (
          <Icon name="angle-down" size={25} style={styles.times} color="white" />
        )}
        
        </View>

        {showInfo && (
          <View style={styles.answers}>
          <View style={styles.toggle}> 
            <Text style={styles.answer}>All Notifications: </Text>
            <View  style={styles.toggleb}> 
            <Toggle value={all} onPress={(all) => setToggleValue(all)} 
            trackBar={{
                  activeBackgroundColor: '#9ee3fb',
                  inActiveBackgroundColor: '#3c4145',
                  borderActiveColor: '#86c3d7',
                  borderInActiveColor: '#1c1c1c',
                  borderWidth: 1,
                  width: 50,
                  height: 20,
                  radius: 25
                                        }}
                  thumbButton={{
                      width: 20,
                      height: 20,
                      radius: 30,
                    }}
                        />
                        </View>
            </View>
            <View style={styles.toggle}> 
            <Text style={styles.answer}>Chat Notifications: </Text>
            <View  style={styles.toggleb}> 
            <Toggle value={chat} onPress={(chat) => setToggleValue(chat)} 
            trackBar={{
                  activeBackgroundColor: '#9ee3fb',
                  inActiveBackgroundColor: '#3c4145',
                  borderActiveColor: '#86c3d7',
                  borderInActiveColor: '#1c1c1c',
                  borderWidth: 1,
                  width: 50,
                  height: 20,
                  radius: 25
                                        }}
                  thumbButton={{
                      width: 20,
                      height: 20,
                      radius: 30,
                    }}
                        />
                        </View>
            </View>
          </View>
        )}
      
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleb:{
    position: "absolute",
    paddingTop: 10,
    left: "150%",
    paddingBottom:10
  },
  toggle:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingBottom:10
  },
  container: {
    flex: 1,
    backgroundColor: Colors.homeback,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    width: "100%",
  },
  dropdown: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  box: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "90%",
    borderRadius: 15,
    alignItems: "flex-start",
    marginBottom:10
  },
  title: {
    // alignItems: "flex-start",
    color: "white",
    fontSize: 21,
    paddingTop: 0,
    paddingBottom: 0,
  },
  answer: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 7,
    color: "white",
    fontSize: 14,
  },
  answers: {
    paddingTop: 10,
    paddingRight:10
  },
  icon: {
    position: "relative",
    alignSelf: "center",
  },
  accordian: {
    width: "100%",
    alignItems: "center",
    paddingTop:20
  },
  clip: {
    position: "absolute",
    paddingTop: 3,
    left: "75%",
  },
  edit: {
    position: "absolute",
    paddingTop: 3,
    left: "85%",
  },
  times: {
    position: "absolute",
    paddingTop: 4,
    left: "95%",
  },
});
