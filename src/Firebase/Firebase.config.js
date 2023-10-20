// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9254f19_xRZbCWyca6ntVs3nzVChYRaI",
  authDomain: "assignment-10-clint.firebaseapp.com",
  projectId: "assignment-10-clint",
  storageBucket: "assignment-10-clint.appspot.com",
  messagingSenderId: "734173896772",
  appId: "1:734173896772:web:c84e459d83b314e6549c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;