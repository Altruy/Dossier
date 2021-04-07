import React, {useState} from 'react'
import TaskAcc from './CalTaskAcc'
import CreateEventModal from './CreateEventModal'

import {View, Text, FlatList, ImageBackground, StyleSheet} from 'react-native'

const Task_expanded = (props) => {
    const show = props.show
    // const [show, setShowState] = useState(props.show)

    const DATA = [
        {
            id: '1',
            title: 'First Item',
            assignees: 'Turu',
            assigner: 'Adnan',
            deadline: 'kal',
            description: 'KAAM KAROOOO',
            completed: '',
        },
        {
            id: '2',
            title: 'Second Item',
            assignees: 'Turu',
            assigner: 'Adnan',
            deadline: 'kal',
            description: 'KAAM KAROOOO',
            completed: '',
        },
        {
            id: '3',
            title: 'Third Item',
            assignees: 'Turu',
            assigner: 'Adnan',
            deadline: 'kal',
            description: 'KAAM KAROOOO',
            completed: '',
        },
        {
            id: '4',
            title: 'fourth Item',
            assignees: 'Turu',
            assigner: 'Adnan',
            deadline: 'kal',
            description: 'KAAM KAROOOO',
            completed: '',
        },
        {
            id: '5',
            title: 'fifth Item',
            assignees: 'Turu',
            assigner: 'Adnan',
            deadline: 'kal',
            description: 'KAAM KAROOOO',
            completed: '',
        },
        {
            id: '6',
            title: 'sixt Item',
            assignees: 'Turu',
            assigner: 'Adnan',
            deadline: 'kal',
            description: 'KAAM KAROOOO',
            completed: '',
        },
    ]
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

    const renderItem = ({item}) => <TaskAcc data={item} />

    if (show) {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/Calendar-tile.png')}
                    style={styles.image}
                >
                    <View style={styles.header}>
                        <View>
                            <Text style={{color: 'white'}}>DATE</Text>
                        </View>
                        <View>
                            <CreateEventModal />
                        </View>
                    </View>

                    <View style={styles.separator}></View>

                    <View style={styles.listbody}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            ItemSeparatorComponent={renderSeparator}
                            // keyExtractor={(item) => item.id}
                        />
                    </View>
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
