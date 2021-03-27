import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import {getRealmApp} from "../getRealmApp";
import { signin } from "../MongoConfig";
// Access the Realm App.
const app = getRealmApp(); // replace this with your App ID

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthContext = React.createContext(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const realmRef = useRef(null);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
    // const myProject = { name: "My Project", partition: `project=${user.id}` };
    // setProjectData([myProject]);

    // TODO: Open the user realm, which contains at most one user custom data object
    // for the logged-in user.

    // TODO: Return a cleanup function that closes the user realm.
  }, [user]);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email, password) => {
    console.log('signin');
    const creds = Realm.Credentials.function({"email":"turyal.neeshat5@gmail.com", "password": "tazor"});
    try {
      // console.log('trying login',creds)
      const newUser = await app.logIn({"email":"turyal.neeshat5@gmail.com", "password": "tazor"});
      // const newUser = await signin("turyal.neeshat5@gmail.com","tazor")
      // setUser({"username":newUser.username , "id": newUser._id["$oid"]});
      // const useri = await app.objects("user")
      setUser(newUser);
      console.log(`Logged in as ${newUser.identity}`);
    } catch (err) {
      console.log("Failed to log in", err.message);
    }

  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (email, password) => {
    console.log(await app.emailPasswordAuth.registerUser(email, password));
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        projectData, // list of projects the user is a memberOf
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
