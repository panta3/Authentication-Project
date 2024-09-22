// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "auth-c6ff1.firebaseapp.com",
  projectId: "auth-c6ff1",
  storageBucket: "auth-c6ff1.appspot.com",
  messagingSenderId: "722316459756",
  appId: "1:722316459756:web:ea49992626d7fc637aafc9",
  measurementId: "G-DMZK3403JP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);