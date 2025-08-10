// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrbBqbdax8oTcCia8Eer6-qhApOZfIBJU",
  authDomain: "questlog-93649.firebaseapp.com",
  projectId: "questlog-93649",
  storageBucket: "questlog-93649.appspot.com",
  messagingSenderId: "230022598807",
  appId: "1:230022598807:web:ecf56f0df3f2dc93b059d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
