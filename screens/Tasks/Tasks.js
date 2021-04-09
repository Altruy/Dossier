import React from 'react'
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
} from 'react-native'
import {Searchbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import data from '../../data/taskacc-data'
import TaskAcc from '../../components/TaskAcc'

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

const Tasks = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const onChangeSearch = (query) => setSearchQuery(query)
    return (
        <ImageBackground
            source={require('../../assets/Notification-background.png')}
            style={styles.image}
        >
            <View style={styles.entire}>
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
                            navigation.navigate('CreateTasks')
                        }}
                        style={styles.btn}
                    >
                        <Text style={styles.text}>
                            New
                            <Icon name="add" size={20} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <TaskAcc data={item} navigation={navigation} />
                        )}
                        keyExtractor={(item) => item.id}
                        // ItemSeparatorComponent={renderSeparator}
                        ListFooterComponent={<View style={{height: 20}} />}
                        style={styles.fl}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    entire: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        // flex: 0.9,
        marginTop: 60,
        height: '80%',
        // justifyContent: 'center',
        paddingHorizontal: 15,
        // marginBottom: 10,
    },
    upperbar: {
        flex: 1,
        marginTop: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
        // marginRight: 20,
        // alignSelf: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    search: {
        // position: 'absolute',
        // paddingHorizontal: 20,
        width: '60%',
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // left: '20%',
    },
    btn: {
        // position: 'absolute',
        fontSize: 18,
        width: '21%',
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 15,
        // paddingTop: 12,
        // left: '75%',
        flexDirection: 'row',
        // alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    fl: {
        paddingTop: 10,
        // paddingBottom: 30,
        // marginTop: 30,
        // marginBottom: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'rgba(255, 255, 255, 0.6)',
    },
    image: {
        // flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    separator: {
        width: '95%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        opacity: 0.8,
        borderRadius: 100,
    },
})
export default Tasks
