import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
 
const firebaseConfig = {
  apiKey: "AIzaSyCaxItDM5DibTom1yGyJFSQ-x4aPa579lc",
  authDomain: "twitter-clone-8deb2.firebaseapp.com",
  projectId: "twitter-clone-8deb2",
  storageBucket: "twitter-clone-8deb2.appspot.com",
  messagingSenderId: "316256817750",
  appId: "1:316256817750:web:fb2a11209fd7fb97a361f7",
  measurementId: "G-0CZVHMM0S2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {db, auth, storage}