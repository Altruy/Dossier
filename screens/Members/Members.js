import React , {useState , useEffect} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {Searchbar} from 'react-native-paper'
import { getCollabs } from '../../API'
import { useAuth } from '../../auth_providers/Auth'
import Accordion from './Accord'

const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '4.5%',
                opacity: 0.2,
            }}
        />
    )
}

const Members = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState([])
    const onChangeSearch = (query) => setSearchQuery(query)
    const { username , setCollabId } = useAuth();
  
    useEffect(() => {
      collabs();
    }, [])
  
    const collabs = async () => getCollabs(username).then((vals)=>setData(vals));
  
    return (
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
                data={data}
                renderItem={({item}) => (
                    <Accordion data={item} navigation={navigation} />
                )}
                keyExtractor={(item,i) => i.toString()}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={<View style={{height: 20}} />}
                style={styles.fl}
            />
        </View>
    )
}

Members.navigationOptions = {
    headerTitle: 'Members',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        backgroundColor: '#341024',
        alignItems: 'center',
    },
    upperbar: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    search: {
        width: '50%',
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    btn: {
        position: 'absolute',
        fontSize: 18,
        width: '18%',
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 10,
        paddingTop: 12,
        left: '75%',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    fl: {
        width: '90%',
        paddingTop: 20,
        // paddingBottom: 30,
        // marginBottom: 30,
        // marginHorizontal: 20,
    },
})
export default Members
