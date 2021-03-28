import Realm from 'realm';
import { ChatSchema, CollabSchema, EventSchema, NoteSchema, NottificationSchema, TaskSchema, UserSchema } from './Schema';

// Returns the shared instance of the Realm app.
export function getRealmApp() {
   const appId = 'dossier-pqooi'; // Set Realm app ID here.
   const appConfig = {
     id: appId,
     timeout: 10000,
   };
  return new Realm.App(appConfig);
}