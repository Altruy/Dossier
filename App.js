import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React ,{useEffect} from "react";
import { Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging';
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from './auth_providers/Auth';
import MainNavigator from './navigation/BackNav'

export default function App() {
  

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);



  return (
    <AuthProvider>
      <PaperProvider>
        <MainNavigator/>
      </PaperProvider>
    </AuthProvider>
  );
}
