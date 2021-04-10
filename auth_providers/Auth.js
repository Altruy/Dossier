import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { getRealmApp } from "../getRealmApp";
import { chatSchema, eventSchema, noteSchema, notificationSchema, taskSchema , userSchema} from "../Schema";
import { signin } from '../API'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Access the Realm App.
const app = getRealmApp();

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthContext = React.createContext(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser);
  const [collabId, setCollabId] = useState('');
  const [colname, setColname] = useState('');
  const [realm , setRealm] = useState(null);
  const realmRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('username').then((v)=>{
      if(!!v){
        setUsername(v)
      }
    })
    
  }, [username])


  useEffect(() => {
    if (!user || collabId==='') {
      console.log('no collab yet')
      return;
    }
    console.log('collab:',collabId);

    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
   
    const OpenRealmBehaviorConfiguration = {
      type: "openImmediately",
    };

    const config = {
      schema: [chatSchema,noteSchema,eventSchema,taskSchema,notificationSchema,userSchema],
      sync: {
        user,
        partitionValue: collabId,
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
      },
    };
    
    // Open a realm with the logged in user's partition value in order
    // to get the projects that the logged in user is a member of
    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm;
      setRealm(userRealm);
      // const users = userRealm.objects("User");
      const chat = realmRef.current.objects("chat");
      const note = realmRef.current.objects("note");
      const event = realmRef.current.objects("event");
      const task = realmRef.current.objects("task");
      const notification = realmRef.current.objects('notification')
      console.log('chats:',chat.length,'notes:',note.length,'event:',event.length,'task:',task.length )
      console.log('notification',notification.length)
      // users.addListener(() => {
      //   // The user custom data object may not have been loaded on
      //   // the server side yet when a user is first registered.
      //   if (users.length === 0) {
      //     setProjectData([myProject]);
      //   } else {
      //     const { memberOf } = users[0];
      //     setProjectData([...memberOf]);
      //   }
      // });
    });

    return () => {
      // cleanup function
      console.log('cleanup')
      // const userRealm = realmRef.current;
      // if (userRealm) {
      //   userRealm.close();
      //   realmRef.current = null;
      //   setProjectData([]); // set project data to an empty array (this prevents the array from staying in state on logout)
      // }
    };
  }, [collabId,user]);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email,password) => {
    console.log('still a dunm')
    // Custom
    let usern = await signin(email,password)
    if(usern===null){
      throw 'Invalid Email or Password';
    }
    setUsername(usern.username);
    setPassword(usern.password);
    setEmail(usern.email);
    AsyncStorage.setItem('username',usern.username)
    console.log('not that big a dunm')
    const creds = Realm.Credentials.function({ 'email' : email , 'password' : password });
    // const creds = Realm.Credentials.anonymous();
    const newUser = await app.logIn(creds);
    console.log('so it worked')
    setUser(newUser);
  };
    //


  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    // user.logOut();
    // setUser(null);
    AsyncStorage.removeItem('username')
    setUsername('')
    
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        username,
        setCollabId,
        realm,
        setCollabId,
        colname,
        setColname,
        collabId, 
        password,
        setPassword,
        email
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth };