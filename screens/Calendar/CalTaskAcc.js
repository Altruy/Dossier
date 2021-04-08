import React, {useState, useRef} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ImageBackground,
    TouchableOpacity,
    TouchableNativeFeedback,
    TextInput,
    Modal,
    FlatList,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native'
import Colors from '../../constants/colors'
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

    console.log('sttile = ', title)
    console.log()
    console.log()
    console.log()

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
                <View style={styles.dropdown}>
                    <View>
                        <Text style={styles.title}>TITLE</Text>
                        <Text style={styles.deadline}>
                            July 12, 2021 {deadline}
                        </Text>
                    </View>
                    {showInfo ? null : (
                        <Icon
                            name="angle-down"
                            size={18}
                            style={styles.angledown}
                            color="white"
                        />
                    )}
                    <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                        <View style={styles.clockicon}>
                            <Text style={styles.clockicontext}> 11:00 </Text>
                        </View>

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
                            Description: {description}
                        </Text>
                    </View>
                )}
                {showInfo ? (
                    <Icon
                        name="angle-down"
                        size={25}
                        style={styles.angleup}
                        color="white"
                    />
                ) : // <Icon
                //     name="angle-down"
                //     size={18}
                //     style={styles.icon}
                //     color="white"
                // />
                null}

                <View style={styles.separator}></View>
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
        // paddingLeft: 10,
        paddingBottom: 10,

        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    box: {
        // padding: 15,
        paddingHorizontal: 15,
        // paddingVertical: 10,
        // backgroundColor: 'rgba(100, 100, 100, 0.5)',
        width: '100%',
        // borderRadius: 15,
        // justifyContent: 'space-between',
    },
    title: {
        // alignItems: "flex-start",
        color: 'white',
        fontSize: 18,
        paddingLeft: 10,

        fontWeight: 'bold',
    },
    deadline: {
        // alignItems: "flex-start",
        color: 'white',
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 0,
        paddingLeft: 15,
        opacity: 0.8,
    },

    clockicon: {
        marginRight: 5,
        backgroundColor: '#B100FF',
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    clockicontext: {color: 'white', fontSize: 16},
    answer: {
        paddingLeft: 20,
        // paddingTop: 8,
        // paddingBottom: 7,
        color: 'white',
        fontSize: 14,
    },
    answers: {
        paddingTop: 10,
    },
    angledown: {
        alignSelf: 'flex-end',
        paddingRight: 9,
    },
    angleup: {
        alignSelf: 'center',
        // paddingBottom: 5,
    },
    accordian: {
        width: '100%',
        alignItems: 'center',
    },

    times: {
        // position: 'absolute',
        paddingTop: 4,
        paddingHorizontal: 10,
        // left: '95%',
    },
    separator: {
        width: '92%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        opacity: 0.8,
        borderRadius: 100,
    },
})

//References
// https://medium.com/@KPS250/creating-an-accordion-in-react-native-f313748b7b46
//https://medium.com/@KPS250/layout-animations-in-react-native-c1bce624a843
