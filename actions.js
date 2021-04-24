import Realm from "realm";
import { getRealmApp } from "./getRealmApp";

// Access the Realm App.
const app = getRealmApp();
// function getRealmApp() {
//     const appId = 'dossier-pqooi'; // Set Realm app ID here.
//     const appConfig = {
//       id: appId,
//       timeout: 10000,
//     };
//    return new Realm.App(appConfig);
//  }
// import * as Realm from "realm-web";
// const id = "dossier-pqooi"; // replace this with your App ID
// // const app = new Realm.App({ id: REALM_APP_ID });
// const config = {
//     id,
//   };
//   const app = new Realm.App(config);
//   const app = Realm.App.getApp("dossier-pqooi"); // replace this with your App ID
// async function anonymousLogin() {
//   let user;
//   try {
//     const app = getRealmApp() // pass in the appConfig variable that you created earlier
//     console.log('app',app)
//     const credentials = Realm.Credentials.anonymous(); // create an anonymous credential
//     console.log(' return?')
//     user = await app.logIn(credentials);
//     console.log('ever return?')
//     return user;
//   } catch (error) {
//       throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;
//   }
// }
// Create an anonymous credential

export const tryy = async () =>{
    console.log("we try")
    // let user = await anonymousLogin();
    const credentials = Realm.Credentials.anonymous();
    try {
        const user = await app.logIn(credentials);
        console.log("Successfully logged in!", user.id);
        return user;
    } catch (err) {
        console.error("Failed to log in", err.message);
    }
    // const user = await app.logIn(Realm.Credentials.anonymous());
      
    console.log('we logged in')
}