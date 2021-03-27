import * as React from 'react';
import { Searchbar } from 'react-native-paper';
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
} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.search}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      containerStyle={{backgroundColor:  "rgba(0, 0, 0, 0.5)", borderWidth: 1, borderRadius: 5}}
      
    />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop:50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color:'#341024',
  },
  search:{
    width:75,
    borderRadius: 100,
    backgroundColor:  "rgba(0, 0, 0, 0.5)"
  }
  
});
export default Search;