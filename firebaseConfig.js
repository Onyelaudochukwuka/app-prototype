// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFfC0pMsTHcVFuQaKUu0OzLFEeBy9RQDU",
  authDomain: "prototype-ad8c0.firebaseapp.com",
  projectId: "prototype-ad8c0",
  storageBucket: "prototype-ad8c0.appspot.com",
  messagingSenderId: "991272716853",
  appId: "1:991272716853:web:12bd6ed4b502fbb376bf7c",
  measurementId: "G-EPM1F9HKC5"
};

// Initialize Firebase
let app = firebase.apps.length === 0 ? initializeApp(firebaseConfig) : firebase.app();
const auth = firebase.auth();
export { auth };