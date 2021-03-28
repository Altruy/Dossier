import React, { useState } from "react";
import SettingsAccordian from "../../components/SettingsAccordian";
import { Searchbar } from "react-native-paper";
import data from "../../data/settings-data";
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
  ScrollView
} from "react-native";

const Settings = ({}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "5.5%",
          opacity: 0.2,
        }}
      />
    );
  };
  return (
    
    <View style={styles.container}> 
     <View style={styles.bar}>
     <TouchableOpacity
            onPress={() => {
              console.log("going back");
            }}
          >
           <Image source={require('../../assets/back-arrow.png')} style={styles.image} />
          </TouchableOpacity>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            iconColor="white"
            placeholderTextColor="white"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          </View>   
          <View style={{marginTop:25,marginLeft:15}}>
          <RenderSeparator />
          </View>
          <ScrollView style={{marginHorizontal: 20}}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <SettingsAccordian data={item}  />
          )}
          keyExtractor={(item) => item.id}
          //ItemSeparatorComponent={RenderSeparator}
          ListFooterComponent={<View style={{ height: 20 }} />}
          style={styles.fl}
        />
      </View>   
      </ScrollView>
  </View>
    
    
  );
};

const styles = StyleSheet.create({
  image: {
    
    height:35,width:35,left:"10%",marginRight:25,marginLeft:15,marginTop:50
  },
  fl: {
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
  },
  container: {
  
   
    flex:1,
    backgroundColor:'#341024',
    color:'#341024',
    
    overflow: "hidden",
  },
  rest:{
    paddingTop:10,
    alignItems: "center",
  },
  search: {
    
    width: "50%",
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    left: "5%",
    marginTop:45,
  },
  bar:{
    flexDirection:'row',
    paddingBottom:0
    },
  
});

export default Settings;
