// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-garbage-33c76.firebaseapp.com",
  projectId: "mern-garbage-33c76",
  storageBucket: "mern-garbage-33c76.appspot.com",
  messagingSenderId: "729552498778",
  appId: "1:729552498778:web:80847323481ecc6be5a863"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);