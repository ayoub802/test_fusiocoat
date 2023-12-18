// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmRIqNKzpRgxAput2gONZHpOSaQiu78zE",
  authDomain: "fusiocoat-project.firebaseapp.com",
  projectId: "fusiocoat-project",
  storageBucket: "fusiocoat-project.appspot.com",
  messagingSenderId: "291623937599",
  appId: "1:291623937599:web:c9c0547a129ae5ca0a7a8a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }