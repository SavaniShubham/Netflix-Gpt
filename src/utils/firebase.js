// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTLAWPaf4qNK5sXsfmtFlkX_kLNNogGLI",
  authDomain: "netflixgpt-9ce3a.firebaseapp.com",
  projectId: "netflixgpt-9ce3a",
  storageBucket: "netflixgpt-9ce3a.appspot.com",
  messagingSenderId: "1051122746089",
  appId: "1:1051122746089:web:49d9affc5cd0a42e106678",
  measurementId: "G-QQYM081N86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth();
