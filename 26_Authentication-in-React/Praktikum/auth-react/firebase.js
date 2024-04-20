// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIpTCR1tBetcA9QuWBR7IjMqYH_HKIDKE",
  authDomain: "alterra-react-practice.firebaseapp.com",
  projectId: "alterra-react-practice",
  storageBucket: "alterra-react-practice.appspot.com",
  messagingSenderId: "822766677975",
  appId: "1:822766677975:web:e5ace73e6c3868fbeea592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)