// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOEPGSJUkpqlhYk1o92_n3J-x30VZG3NM",
  authDomain: "netflixgpt-fe953.firebaseapp.com",
  projectId: "netflixgpt-fe953",
  storageBucket: "netflixgpt-fe953.firebasestorage.app",
  messagingSenderId: "264034068237",
  appId: "1:264034068237:web:7c6b63010edb285704f244",
  measurementId: "G-FGHXS4GHLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export   const auth = getAuth();