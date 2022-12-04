// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7uc5KKn-NVEeD_0kUhcgY3H4aZ1kNZCM",
  authDomain: "react-cursos-2c237.firebaseapp.com",
  projectId: "react-cursos-2c237",
  storageBucket: "react-cursos-2c237.appspot.com",
  messagingSenderId: "681833047479",
  appId: "1:681833047479:web:86bfbb766e74b624c13432"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Get Authentication configuration
export const FirebaseAuth = getAuth(FirebaseApp);
// Get Firestore DB configuration
export const FirestoreDB = getFirestore(FirebaseApp);