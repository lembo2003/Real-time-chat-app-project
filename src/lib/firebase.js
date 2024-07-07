// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "realtimechat-8227d.firebaseapp.com",
  projectId: "realtimechat-8227d",
  storageBucket: "realtimechat-8227d.appspot.com",
  messagingSenderId: "369294938210",
  appId: "1:369294938210:web:bfb53bbce5c0922e45813b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth()
 export const db = getFirestore()
 export const storage = getStorage() 