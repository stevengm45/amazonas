// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-t8HrIZLU9VhsFp06oM4WYkGVwX3OEqM",
  authDomain: "plantas-3b306.firebaseapp.com",
  projectId: "plantas-3b306",
  storageBucket: "plantas-3b306.appspot.com",
  messagingSenderId: "90501775664",
  appId: "1:90501775664:web:fc00956a957b5b96f848f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const baseDato = getFirestore();

export { app, google, facebook, baseDato };