// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDljBec-G9E3Adx8cRT-t0Lm9t2JGvx90",
  authDomain: "richpanel-f19f6.firebaseapp.com",
  projectId: "richpanel-f19f6",
  storageBucket: "richpanel-f19f6.appspot.com",
  messagingSenderId: "804465324551",
  appId: "1:804465324551:web:73d6f823255553b746b0a2",
  measurementId: "G-VJC2JM320Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);