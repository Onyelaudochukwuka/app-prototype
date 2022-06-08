// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);