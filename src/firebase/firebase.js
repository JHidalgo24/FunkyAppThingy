import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDeQpRWIbCiEcZrAA4eI2jWqjgehA4OI60",
    authDomain: "melodydating.firebaseapp.com",
    projectId: "melodydating",
    storageBucket: "melodydating.appspot.com",
    messagingSenderId: "874220047741",
    appId: "1:874220047741:web:14c96a3b0745e495251014",
    measurementId: "G-L2M71C6XSW"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};
