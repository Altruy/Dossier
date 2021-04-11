

// const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
// const uri =
  // "mongodb+srv://Altruy:tazor5@cluster0.0uvef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const resturi = "https://webhooks.mongodb-realm.com/api/client/v2.0/app/dossier-svtta/service/REST/incoming_webhook/"
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export async function signin(email,password) {
  return await fetch(resturi+'signIn', {
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
}
signin().catch(console.dir);


export async function signup(email,password,username) {
  return await fetch(resturi+'signUp', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "username":username
    })
  }).then((response) => response.json()).catch(console.dir);
}


export async function changepwd(email,password) {
  return await fetch(resturi+'updatePassword', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  }).then((response) => response.json()).catch(console.dir);
}



export async function getCollabs(username) {
  return await fetch(resturi+`getCollab?user=${username}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).catch(console.dir);
}


export async function getUsers(collab) {
  return await fetch(resturi+`getUsers?collab=${collab}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((resp)=>{
    if(resp!==null)
    {
      return resp.users.map((vals,i)=>({"key":i.toString() , "username":vals})) 
  }
  }).catch((e)=>console.log('get user',e));
   
}


export async function removeAdmin(collab,username) {
  return await fetch(resturi+`removeAdmin`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'username' : username,
      'collab' : collab
    })
  }).then((response) => response.json()).then((resp)=>{
    return 1
  }).catch((e)=>null);
   
}


export async function addAdmin(collab,username) {
  return await fetch(resturi+`addAdmin`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'username' : username,
      'collab' : collab
    })
  }).then((response) => response.json()).then((resp)=>{
    return 1
  }).catch((e)=>null);
   
}


export async function removeUser(collab,username) {
  return await fetch(resturi+`removeUser`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'username' : username,
      'collab' : collab
    })
  }).then((response) => response.json()).then((resp)=>{
    return 1
  }).catch((e)=>null);
   
}

export async function joinCollab(collab,username) {
  return await fetch(resturi+`addUser`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'username' : username,
      'collab' : collab
    })
  }).then((response) => response.json()).then((resp)=>{
    return 1
  }).catch((e)=>null);  
}


export async function newCollab(name,username) {
  return await fetch(resturi+`addCollab`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'creator' : username,
      'name' : name
    })
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}


export async function getGroup(collab) {
  return await fetch(resturi+`getGroup?collabId=${collab}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },

  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}

export async function addGroup(collab,text,user) {
  return await fetch(resturi+`addChat`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'collab' : collab,
      'from' : user,
      'to':'ALL',
      'message':text
    })
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}


export async function getChat(collab,username,user) {
  return await fetch(resturi+`getChat?collabId=${collab}&user1=${username}&user2=${user}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },

  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}

export async function addChat(collab,text,user,username) {
  return await fetch(resturi+`addChat`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'collab' : collab,
      'from' : username,
      'to':user,
      'message':text
    })
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}


export async function addNotif(collab,username,data,to=['ALL']) {
  return await fetch(resturi+`addNotification`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'collab' : collab,
      'by' : username,
      'to':to,
      'data':data
    })
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}


export async function getNotif(username,collab) {
  return await fetch(resturi+`getNotifications?user=${username}&collabId=${collab}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json()).then((resp)=>{
    return resp.reverse()
  }).catch((e)=>null);  
}


export async function getNotifCount(username,collab) {
  return await fetch(resturi+`getNotifications?user=${username}&collabId=${collab}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json()).then((resp)=>{
    return resp.length
  }).catch((e)=>null);  
}


export async function getEvents(collab,year,month) {
  return await fetch(resturi+`getEvents`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'collabId' : collab,
      'year' : year,
      'month':month
    })
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}

export async function addEvent(collab, username , title , date , duration='' , description='') {
  return await fetch(resturi+`addEvent`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'collabId' : collab,
       'date'  : date,
       'duration':  duration, 
       'title':  title, 
       'user': username, 
       'description': description
    })
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
} 


export async function deleteEvent(id) {
  return await fetch(resturi+`deleteEvent?id=${id}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
} 
