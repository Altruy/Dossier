import { registerRootComponent } from 'expo';
import App from './App';
import PushNotification from "react-native-push-notification";

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({

  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
  

      // PushNotification.cancelAllLocalNotifications()
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish();
    },
  
    
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    // requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: "channel-id", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
