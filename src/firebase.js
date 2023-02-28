// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw6PcgZCiXWO2STXtAMOxzSC3VAhToIcc",
  authDomain: "projectlaba-65f88.firebaseapp.com",
  databaseURL: "https://projectlaba-65f88-default-rtdb.firebaseio.com",
  projectId: "projectlaba-65f88",
  storageBucket: "projectlaba-65f88.appspot.com",
  messagingSenderId: "245550483156",
  appId: "1:245550483156:web:2c751487c37116fa695d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 