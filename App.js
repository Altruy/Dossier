import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AppNavigator from './navigation/Navigator'
import Collaborations from './screens/Home/Collaborations'
import NoteTile from './components/NoteTile'
import NoteModal from './components/NoteModal'
import TestM from './components/TestM'
import {Provider as PaperProvider} from 'react-native-paper'

export default function App() {
    return (
        <PaperProvider>
            <AppNavigator />
        </PaperProvider>
    )
}
