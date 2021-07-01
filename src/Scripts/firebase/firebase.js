import firebase from 'firebase';

const firebaseConfig = { // dont forget to move these into .env
    apiKey: "AIzaSyAMHVap0EnmpEpVLNV4lGIsZcKd20z6KYs",
    authDomain: "mo7amy-7e97c.firebaseapp.com",
    projectId: "mo7amy-7e97c",
    storageBucket: "mo7amy-7e97c.appspot.com",
    messagingSenderId: "393733132302",
    appId: "1:393733132302:web:127784ee5f511465206c5f",
    measurementId: "G-R0B811XHW1"
};

firebase.initializeApp(firebaseConfig);

export default firebase