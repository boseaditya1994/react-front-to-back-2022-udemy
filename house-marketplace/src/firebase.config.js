// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoR3_N_445B7VC9GZDRcIHnGUNxX4P4IA",
  authDomain: "house-marketplace-app-af634.firebaseapp.com",
  projectId: "house-marketplace-app-af634",
  storageBucket: "house-marketplace-app-af634.appspot.com",
  messagingSenderId: "777408251485",
  appId: "1:777408251485:web:637080d484e5d68c902fb4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();