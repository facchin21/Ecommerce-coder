// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSiSqvkHQKJ-NM-Be2p5GRpFEeIhrchPY",
  authDomain: "codermarket-f3fff.firebaseapp.com",
  projectId: "codermarket-f3fff",
  storageBucket: "codermarket-f3fff.appspot.com",
  messagingSenderId: "466178827291",
  appId: "1:466178827291:web:2d00ab6b846a1c311384be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
