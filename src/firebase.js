// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');
export const ordersCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
  
export const onProductsLoad = (callback) =>
onSnapshot(productsCollection, (snapshot) =>
  callback(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  )
);

export const onOrdersLoad = (callback) =>
  onSnapshot(ordersCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

  export const uploadProductPhoto = (file) => {
    const storageRef = ref(storage, `products/${file.name}`);
    return uploadBytes(storageRef, file)
      .then(() => {
        return getDownloadURL(storageRef);
      })
      .catch((error) => {
        console.log("Failed to upload product photo:", error);
      });
  };