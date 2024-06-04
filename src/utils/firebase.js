// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd-FJfk2F4LHVnUKPZ1YsZRm1icu9Bx-Q",
  authDomain: "neflixgemini.firebaseapp.com",
  projectId: "neflixgemini",
  storageBucket: "neflixgemini.appspot.com",
  messagingSenderId: "80780776729",
  appId: "1:80780776729:web:1604454073aef611b12188",
  measurementId: "G-5XQ2M3HMGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth();
