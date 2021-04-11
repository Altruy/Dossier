import React, {useState} from 'react'
import TaskAcc from './CalTaskAcc'

import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {ScrollView} from 'react-native-gesture-handler'

const Task_expanded = ({show, DATA, navigation,date,month}) => {
  
    const RenderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '86%',
                    backgroundColor: 'white',
                    // alignItems: 'center',
                    alignSelf: 'center',
                    // marginLeft: '4.5%',
                    marginVertical:'3%',
                    opacity: 0.5,
                    borderRadius: 100,
                }}
            />
        )
    }

    const renderItem = ({item}) => <TaskAcc data={item} time={date} month ={month} navigation={navigation}/>

    if (show) {
        return (
            <View style={styles.container}>
                
                    <View style={styles.header}>
                        <View>
                            <Text style={{color: 'white',fontSize:17}}>{date}</Text>
                        </View>
                    </View>

                    <View style={styles.separator}></View>
                    <ScrollView>
                        {DATA.length!==0 && <View style={styles.listbody}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                ItemSeparatorComponent={RenderSeparator}
                                keyExtractor={(item) => item.id}
                            />
                        </View>}
                        {DATA.length!==0 && <RenderSeparator/>}
                        {DATA.length ===0 && <Text style={{paddingBottom:10,left:23,color: 'white',fontSize:15}}>No Events</Text>}
                    </ScrollView>
            </View>
        )
    } else {
        return null
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '93%',
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 10,
        marginVertical: 8,
        alignSelf:'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
        borderRadius: 8,
        // opacity: 0.5,
    },
    button: {
        flexDirection: 'row',
        // fontSize: 20,
        borderRadius: 20,
        // marginRight: 15,
        textDecorationColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        // alignItems: 'center',
        // height: 25,
    },
    buttonOpen: {
        backgroundColor: '#B100FF',
        // backgroundColor: 'grey',
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        justifyContent: 'flex-start',
        textAlignVertical: 'center',
        paddingRight: 10,
    },
    removeicon: {
        height: 20,
        width: 20,
    },

    header: {
        height: 50,
        padding: 20,
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    separator: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        opacity: 0.8,
        borderRadius: 100,
        marginBottom:'3%',
    },

    listbody: {
        paddingVertical: 2,
        // marginBottom: 20,
    },
})

export default Task_expanded