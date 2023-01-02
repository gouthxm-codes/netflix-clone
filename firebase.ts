// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR5PN3UPBy3IRzKuhtVqOmKVEizpHoroU",
  authDomain: "netflix-clone-acea7.firebaseapp.com",
  projectId: "netflix-clone-acea7",
  storageBucket: "netflix-clone-acea7.appspot.com",
  messagingSenderId: "734542996377",
  appId: "1:734542996377:web:a8e77e3d9d8548b90d6908",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
