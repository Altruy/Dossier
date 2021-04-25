

// const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
// const uri =
  // "mongodb+srv://Altruy:tazor5@cluster0.0uvef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const resturi = "https://webhooks.mongodb-realm.com/api/client/v2.0/app/dossier-svtta/service/REST/incoming_webhook/"
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
var API_KEY ;
import {encode} from 'base-64'



export async function emailS(email) {
  const body = new FormData
  body.append("from", "Dossier <dossier@sandbox2f92add2a1d142c4939eec1e21dad33a.mailgun.org>")
  body.append("", "\\")
  body.append("to", email)
  body.append("", "\\")
  body.append("subject", "Pasword Reset Request")
  body.append("", "\\")
  body.append("text", `We received a request to reset the password of the Dossier Account associated with this email address\n\nIf you made this request, click on the link to generate a new password:\n${resturi + 'resetPassword?email='+email}\nYou can use the automativally generated password from this link to login. Make sure to change the password upon logging in.\n\nIf you did not make this request, you can safely disregard this email.\n\n\nThanks,\nThe Dossier Team`)

  return fetch("https://api.mailgun.net/v3/sandbox2f92add2a1d142c4939eec1e21dad33a.mailgun.org/messages", {
    body,
    method :'POST',
    headers: {
      Authorization: 'Basic ' + encode('api' + ":" + API_KEY ),
      "Content-Type": "multipart/form-data"
    }
  }).then((response) => response.json()).catch((er)=>console.log(er))
}



export async function emailI(email,coll,username,collid) {
  const body = new FormData
  body.append("from", "Dossier <dossier@sandbox2f92add2a1d142c4939eec1e21dad33a.mailgun.org>")
  body.append("", "\\")
  body.append("to", email)
  body.append("", "\\")
  body.append("subject", "Invititaion to Join Collabotation")
  body.append("", "\\")
  body.append("text", `${username} has invited you to join the collaboration: ${coll}\n\nIf you wish to join the collaboration, click on the link :\n${resturi + 'joinCollab?email='+email+'&collab='+collid}\n\nIf you do not wish to join the collaboration, you can safely disregard this email.\n\n\nThanks,\nThe Dossier Team`)

  return fetch("https://api.mailgun.net/v3/sandbox2f92add2a1d142c4939eec1e21dad33a.mailgun.org/messages", {
    body,
    method :'POST',
    headers: {
      Authorization: 'Basic ' + encode('api' + ":" + API_KEY ),
      "Content-Type": "multipart/form-data"
    }
  }).then((response) => response.json()).catch((er)=>console.log(er))
}

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
      'collab' : collab,
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

export async function getNotes(collab) {
  return await fetch(resturi+`getNotes?collabId=${collab}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}


export async function getTasks(collab) {
  return await fetch(resturi+`getTasks?collabId=${collab}`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json()).then((resp)=>{
    return resp
  }).catch((e)=>null);  
}
