// const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://Altruy:tazor5@cluster0.0uvef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const resturi = "https://webhooks.mongodb-realm.com/api/client/v2.0/app/dossier-svtta/service/REST/incoming_webhook/signIn"
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export async function signin(email,password) {
  return await fetch(resturi, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  }).then((response) => response.json())
  // try {
  //   await client.connect();

  //   const database = client.db('dossier');
  //   const resps = database.collection('users');

  //   // Query for a movie that has the title 'Back to the Future'
  //   const query = { "email" : email , "password" : password };
  //   const resp = await resps.findOne(query);

  //   console.log(resp);
  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}
// signin().catch(console.dir);