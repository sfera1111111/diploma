// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIISuIP3ZiwuPBOLe3RcUB87AJHIQWSBA",
  authDomain: "diplom-ebe32.firebaseapp.com",
  projectId: "diplom-ebe32",
  storageBucket: "diplom-ebe32.appspot.com",
  messagingSenderId: "373381054164",
  appId: "1:373381054164:web:f38a7d5f2deba9efedc541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categoryCollection = collection(db, 'categories')
export const productsCollection = collection(db, 'products');