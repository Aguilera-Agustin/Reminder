  
const firebase = require('firebase/app')
const firestore = require('firebase/firestore')

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "reminder-c8d6d.firebaseapp.com",
    projectId: "reminder-c8d6d",
    storageBucket: "reminder-c8d6d.appspot.com",
    messagingSenderId: "508079009016",
    appId: "1:508079009016:web:75469d5d91060c23ce9f0d",
    measurementId: "G-G953Z4GLK9"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
module.exports=  {
    db,
    firebase
}