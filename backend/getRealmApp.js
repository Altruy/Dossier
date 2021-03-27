import Realm from 'realm';
import { ChatSchema, CollabSchema, EventSchema, NoteSchema, NottificationSchema, TaskSchema, UserSchema } from '../models/Schema';

let app;
// Returns the shared instance of the Realm app.
export function getRealmApp() {
    if (app === undefined) {
      const appConfig = {
        id: "dossier-svtta",
        timeout: 10000,
        app: {
          name: "default",
          version: "0.1",
        },
        schema : [UserSchema,CollabSchema,NoteSchema,ChatSchema,EventSchema,TaskSchema,NottificationSchema],

      };
      app = new Realm.App(appConfig);
    }
    return app;
}