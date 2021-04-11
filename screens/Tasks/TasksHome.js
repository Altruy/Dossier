import React , {useEffect} from "react";
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
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
// import data from "../../data/taskacc-data";
import TaskAcc from "../../components/TaskAcc";
import {useAuth} from '../../auth_providers/Auth'

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "7%",
        opacity: 0.3,
        marginVertical:10
      }}
    />
  );
};

const Tasks = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  const [fildata, setFildata] = React.useState([]);
  const { realm , username , collabId} = useAuth();

  const onChangeSearch = (query) => {
    setFildata(data.filter((item)=>item.title.includes(query)))
    setSearchQuery(query);
  }
  
  useEffect(() => {
    if(realm!==null)
    {
      let dat = realm.objects('task')
      setData(dat)
      setFildata(dat)
    }
    
  }, [realm])

  return (
    <ImageBackground
      source={require("../../assets/Notification-background.png")}
      style={styles.image}
    >
      
      <View style={styles.container}>
      
        <View style={styles.upperbar}>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            iconColor="white"
            placeholderTextColor="white"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          
        </View>
        <FlatList
          data={fildata}
          renderItem={({ item }) => (
            <TaskAcc data={item} navigation={navigation} username = {username} />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={<View style={{ height: 20 }} />}
          style={styles.fl}
        />
      </View>
      <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateTasks");
            }}
            style={styles.btn}
          >
          <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  entire: {
    width: "100%",
    height: "100%",
  },
  container: {
    paddingTop: 10,
    justifyContent: "center",
    height:'100%',
    
  },
  upperbar: {
    width:'100%',
    marginBottom:'8%',
    marginTop:'8%',
    flexDirection: "row",
    justifyContent:'center',
  },
  search: {
    width: "55%",
    height:45,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.50)"
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
  text: {
    color: "white",
    fontSize: 18,
  },
  fl: {
    paddingTop: 10,
    paddingBottom: 50,
    marginBottom: 30,
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
});
export default Tasks;
