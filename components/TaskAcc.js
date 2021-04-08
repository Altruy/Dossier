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
    LayoutAnimation,
    UIManager,
} from 'react-native'
import Colors from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default Accordian = ({data}) => {
    const [showInfo, setShowInfo] = useState(false)
    UIManager.setLayoutAnimationEnabledExperimental(true)
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
    const toggleDropbox = (show) => {
        setShowInfo(show)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }
    return (
        <TouchableOpacity
            style={styles.accordian}
            onPress={() => toggleDropbox(!showInfo)}
        >
            <View style={styles.box}>
                <View style={styles.separator}></View>
                <View style={styles.dropdown}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.iconcontainer}>
                        <Icon
                            style={styles.clip}
                            name="clipboard-check"
                            size={20}
                            color="white"
                        />
                        <Icon
                            style={styles.edit}
                            name="edit"
                            size={20}
                            color="white"
                        />
                        <Icon
                            style={styles.times}
                            name="times"
                            size={20}
                            color="white"
                        />
                    </View>
                </View>

                {showInfo && (
                    <View style={styles.answers}>
                        <Text style={styles.answer}>
                            Co-Assignees: {assignees.join()}
                        </Text>
                        <Text style={styles.answer}>Deadline: {deadline} </Text>
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
        // alignItems: 'center',
        // justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        // width: '100%',
    },
    dropdown: {
        flex: 1,
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingHorizontal: 15,
        // paddingBottom: 10,
        // alignItems: 'center',
    },
    box: {
        // padding: 15,
        paddingVertical: 5,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '95%',
        // borderRadius: 15,
        // alignItems: 'flex-start',
    },
    title: {
        // alignItems: 'flex-start',
        color: 'white',
        fontSize: 18,
        // paddingTop: 10,
        paddingBottom: 0,
    },
    answer: {
        paddingHorizontal: 20,
        paddingTop: 8,
        // paddingBottom: 7,
        color: 'white',
        fontSize: 14,
    },
    answers: {
        paddingVertical: 10,
    },
    icon: {
        position: 'relative',
        alignSelf: 'center',
    },
    accordian: {
        width: '100%',
        alignItems: 'center',
    },
    iconcontainer: {
        flexDirection: 'row',
        // paddingHorizontal: 15,
    },
    clip: {
        // position: 'absolute',
        // paddingTop: 30,
        // left: '75%',
        padding: 5,
    },
    edit: {
        // position: 'absolute',
        // paddingTop: 30,
        // left: '85%',
        padding: 5,
    },
    times: {
        // position: 'absolute',
        // pasddingTop: 30,
        // left: '95%',
        padding: 5,
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
