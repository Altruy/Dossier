import React, { useState } from "react";
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
import Icon from "react-native-vector-icons/FontAwesome";

export default CollabText = ({ title, data }) => {
  const [showInfo, setShowInfo] = useState(true);

  const RenderSeparator = () => {
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
    
  <View>
         {(
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.container}
                onPress={() => console.log(data)}
              >
          
            <Text style={styles.text}>{item.name}</Text>
                  <Image 
                  source={require('../assets/next.png')} 
                  style={styles.ImageIconStyle} 
                  />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={RenderSeparator}
          />
        )}
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 14,
    borderRadius: 60,
    borderWidth:10,
    borderLeftWidth:10,
    borderColor: "rgba(0, 0, 0, 0.5)",
    marginVertical:7,
    justifyContent: 'space-between',
    width:325,
    opacity:25
  },
  text:
  {
    paddingLeft:5,
    color : 'white',
    justifyContent: 'space-between',
    fontSize: 12,
    alignContent:'center',
  },
  ImageIconStyle:{

    height: 28,
    width:28,
    alignContent:'center',
    paddingRight:25,
    paddingBottom:5
  
  }
});
