// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvLsPPtVuBqlkQR9lDG1gfVrQjYOqGoNY",
  authDomain: "linkedin-clone-74a27.firebaseapp.com",
  projectId: "linkedin-clone-74a27",
  storageBucket: "linkedin-clone-74a27.appspot.com",
  messagingSenderId: "586231819800",
  appId: "1:586231819800:web:11950002c7dd89af985d6d",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
