// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ctms-6d614.firebaseapp.com",
  projectId: "ctms-6d614",
  storageBucket: "ctms-6d614.appspot.com",
  messagingSenderId: "923487443609",
  appId: "1:923487443609:web:aae05a2da971cb7bc7f608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);