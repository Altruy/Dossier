import React, {useState} from 'react'
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
    FlatList,
} from 'react-native'
import Colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default Accordian = ({data}) => {
    const [showInfo, setShowInfo] = useState(false)
    const {
        id,
        collab,
        title,
        assignees,
        assigner,
        deadline,
        description,
        completed,
    } = data

    console.log('sttile = ', title)
    console.log()
    console.log()
    console.log()

    return (
        <TouchableOpacity
            style={styles.accordian}
            onPress={() => setShowInfo(!showInfo)}
        >
            <View style={styles.box}>
                <View style={styles.dropdown}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.answer}>Deadline: {deadline} </Text>
                    </View>

                    <Text style={styles.answer}>[ClockIcon] </Text>
                    <Icon
                        style={styles.times}
                        name="times"
                        size={20}
                        color="white"
                    />
                </View>

                {showInfo && (
                    <View style={styles.answers}>
                        <Text style={styles.answer}>
                            Description: {description}{' '}
                        </Text>
                    </View>
                )}
                {showInfo ? (
                    <Icon
                        name="angle-up"
                        size={18}
                        style={styles.icon}
                        color="white"
                    />
                ) : (
                    <Icon
                        name="angle-down"
                        size={18}
                        style={styles.icon}
                        color="white"
                    />
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.homeback,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        width: '100%',
    },
    dropdown: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    box: {
        padding: 15,
        // backgroundColor: 'rgba(100, 100, 100, 0.5)',
        width: '100%',
        // borderRadius: 15,
        alignItems: 'flex-start',
    },
    title: {
        // alignItems: "flex-start",
        color: 'white',
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 0,
    },
    answer: {
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 7,
        color: 'white',
        fontSize: 14,
    },
    answers: {
        paddingTop: 10,
    },
    icon: {
        position: 'relative',
        alignSelf: 'center',
    },
    accordian: {
        width: '100%',
        alignItems: 'center',
    },
    clip: {
        position: 'absolute',
        paddingTop: 3,
        left: '75%',
    },
    edit: {
        position: 'absolute',
        paddingTop: 3,
        left: '85%',
    },
    times: {
        position: 'absolute',
        paddingTop: 4,
        left: '95%',
    },
})
