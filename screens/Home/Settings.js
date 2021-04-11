import React, { useState ,useEffect } from "react";
import SettingsAccordian from "../../components/SettingsAccordian";
import { Searchbar } from "react-native-paper";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import TopBar from "../../components/TopBar";
import { useAuth } from "../../auth_providers/Auth";
import { getCollabs } from "../../API";

const Settings = ({navigation}) => {
  const [data, setData] = useState([])
  const [fil, setfil] = useState([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const {username } = useAuth()
  const onChangeSearch = (query) => {
      setSearchQuery(query)
      setfil(data.filter((val)=>val.name.includes(query)))
  }

  useEffect(() => {
      collabs()
  }, [])


  const collabs = async () => getCollabs(username).then((vals)=>{
      setData(vals)
      setfil(vals)
  });

  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "5.5%",
          marginTop: 5,
          opacity: 0.2,
        }}
      />
    );
  };
  return (
    
    <View style={styles.container}> 
    <TopBar navigation={navigation} title={'Settings'}/>
     <View style={styles.bar}>
     
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
          data={fil}
          renderItem={({ item }) => (
            <SettingsAccordian data={item}  />
          )}
          keyExtractor={(item,i) => i.toString()}
          ItemSeparatorComponent={RenderSeparator}
          ListFooterComponent={<View style={{ height: 10 }} />}
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
    alignItems:'center'
  },
  
});

export default Settings;
