import React ,{useState , useEffect} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {Searchbar} from 'react-native-paper'
import { getCollabs } from '../../API'
import { useAuth } from '../../auth_providers/Auth'
import TopBar from '../../components/TopBar'
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

const Notification = ({navigation}) => {
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

    return (
        <View style={{height:'100%',
        backgroundColor: '#341024',}}>
        
        <TopBar navigation={navigation} title={'Notifications'} />
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
                data={fil}
                renderItem={({item}) => (
                    <Accordion col={item} navigation={navigation} />
                )}
                keyExtractor={(item,i) => i.toString()}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={<View style={{height: 20}} />}
                style={styles.fl}
            />
        </View>
        </View>
    )
}

Notification.navigationOptions = {
    headerTitle: 'Notifications',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#341024',
        alignItems: 'center',
    },
    upperbar: {
        width:'100%',
        marginBottom: "3%",
        marginTop:'10%',
        flexDirection: "row",
        justifyContent:'center'
      },
      search: {
        width: "55%",
        height:45,
        borderRadius: 30,
        backgroundColor: "rgba(0,0,0,0.50)"
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
export default Notification
