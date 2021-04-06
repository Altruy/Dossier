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
        marginLeft: "4.5%",
        opacity: 0.2,
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateTasks");
            }}
            style={styles.btn}
          >
            <Text style={styles.text}>
              New
              <Icon name="add" size={20} color="white" />
            </Text>
          </TouchableOpacity>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  entire: {
    width: "100%",
    height: "100%",
  },
  container: {
    paddingTop: 20,
    justifyContent: "center",
  },
  upperbar: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },
  search: {
    position: "absolute",
    width: "50%",
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    left: "20%",
  },
  btn: {
    position: "absolute",
    fontSize: 18,
    width: "21%",
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    paddingTop: 12,
    left: "75%",
    flexDirection:'row'
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  fl: {
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
  },
});
export default Tasks;
