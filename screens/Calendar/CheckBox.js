import React, {useState} from 'react'
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native'
import {colors} from 'react-native-elements'

import {Checkbox} from 'react-native-paper'

const Repeat = (props) => {
    const [checked, setChecked] = React.useState()

    const day = props.day

    return (
        <View>
            <View>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        console.log('new: ', checked)
                        setChecked(!checked)
                    }}
                    color="white"
                    uncheckedColor="white"
                />
            </View>
            <Text
                style={{
                    color: 'white',
                    paddingLeft: 10,
                }}
            >
                {day}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})
export default Repeat
