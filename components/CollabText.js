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
import { ScrollView } from "react-native-gesture-handler";

export default CollabText = ({ navigation , setCollabId, data ,setColname}) => {
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
    <ScrollView style={{marginHorizontal: 20}}> 
  <View>
         {(
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  setCollabId(item.collab);
                  setColname(item.name)
                  navigation.navigate('Home');
                }}
              >
          
            <Text style={styles.text}>{item.name}</Text>
                  <Image 
                  source={require('../assets/next.png')} 
                  style={styles.ImageIconStyle} 
                  />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={RenderSeparator}
            keyExtractor={(item) => item.collab}
          />
        )}
        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 10,
    borderRadius: 30,
    marginVertical:7,
    justifyContent: 'space-between',
    width:300,
    borderWidth:0.5,
    height:50
    
  },
  text:
  {
    paddingLeft:15,
    color : 'white',
    fontSize: 12,
    alignSelf:'center'
  },
  ImageIconStyle:{

    height: 20,
    width:20,
    alignSelf:'center',
    marginRight:15,
    paddingBottom:5
  
  }
});
