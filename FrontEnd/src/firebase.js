// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-auth-project-week-9.firebaseapp.com",
  projectId: "react-auth-project-week-9",
  storageBucket: "react-auth-project-week-9.appspot.com",
  messagingSenderId: "159205083915",
  appId: "1:159205083915:web:94a30e4e03791f1cd4f00e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
