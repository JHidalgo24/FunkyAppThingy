import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

//you need to enable authorization and firestore in testing mode, and it should work theoretically
const firebaseConfig = {
    //Justins
    // apiKey: "AIzaSyDeQpRWIbCiEcZrAA4eI2jWqjgehA4OI60",
    // authDomain: "melodydating.firebaseapp.com",
    // projectId: "melodydating",
    // storageBucket: "melodydating.appspot.com",
    // messagingSenderId: "874220047741",
    // appId: "1:874220047741:web:14c96a3b0745e495251014",
    // measurementId: "G-L2M71C6XSW"

    //Davids
    apiKey: "AIzaSyAwPtLGLf7Rx5LSVeLGVbSkzgWG0SezN94",
    authDomain: "melody-7824c.firebaseapp.com",
    projectId: "melody-7824c",
    storageBucket: "melody-7824c.appspot.com",
    messagingSenderId: "946301541272",
    appId: "1:946301541272:web:bd426c12bd976a7060e9ed",
    measurementId: "G-R74YJHGDG7"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};
