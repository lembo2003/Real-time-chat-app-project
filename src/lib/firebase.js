



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: "reactrealtimechat-54179.firebaseapp.com",
  projectId: "reactrealtimechat-54179",
  storageBucket: "reactrealtimechat-54179.appspot.com",
  messagingSenderId: "564533201673",
  appId: "1:564533201673:web:efc06612212ad0ff3261d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



 export const auth = getAuth()
 export const db = getFirestore()
 export const storage = getStorage() 