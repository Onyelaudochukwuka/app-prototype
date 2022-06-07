// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB92FLxiN6wFCXwXhPQ63_Ber_xydFMOTU",
  authDomain: "practiseudoka.firebaseapp.com",
  projectId: "practiseudoka",
  storageBucket: "practiseudoka.appspot.com",
  messagingSenderId: "15560003930",
  appId: "1:15560003930:web:75351b3c2f7e3604a92363",
  measurementId: "G-KYB1EH723E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);