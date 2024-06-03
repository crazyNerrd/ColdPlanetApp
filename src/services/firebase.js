// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBdxISrSOoaaKU202t8xtRGyFIVYndVU",
  authDomain: "movie-app-73ab4.firebaseapp.com",
  projectId: "movie-app-73ab4",
  storageBucket: "movie-app-73ab4.appspot.com",
  messagingSenderId: "533693327244",
  appId: "1:533693327244:web:b31e36b8925dfa25bb18a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
