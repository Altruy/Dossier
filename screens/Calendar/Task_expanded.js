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
import {ScrollView} from 'react-native-gesture-handler'

const Task_expanded = ({show, DATA, navigation,date,month}) => {
  
    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '86%',
                    backgroundColor: 'white',
                    // alignItems: 'center',
                    alignSelf: 'center',
                    // marginLeft: '4.5%',
                    opacity: 0.5,
                    borderRadius: 100,
                }}
            />
        )
    }

    const renderItem = ({item}) => <TaskAcc data={item} time={date} month ={month}/>

    if (show) {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/Calendar-tile.png')}
                    style={styles.image}
                >
                    <View style={styles.header}>
                        <View>
                            <Text style={{color: 'white'}}>{date}</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonOpen]}
                                onPress={
                                    () => {navigation.navigate('CreateEvent')}
                                    // alert('AYY')
                                }

                                //
                            >
                                <Text style={styles.textStyle}>New Event</Text>
                                <Image
                                    source={require('../../assets/invite.png')}
                                    style={styles.removeicon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.separator}></View>
                    <ScrollView>
                        <View style={styles.listbody}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                ItemSeparatorComponent={renderSeparator}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    } else {
        return null
    }
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#1F0915',
        // padding: 10,
        // margin: 10,
        // borderRadius: 40,
        // height: '45%',
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flex: 1,
        marginTop: 15,
        alignSelf: 'center',
        // alignItems: 'center',
        width: '95%',
        height: '45%',
        // flex: 0.95,
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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
    },

    listbody: {
        paddingVertical: 2,
        // marginBottom: 20,
    },
})

export default Task_expanded
