import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6JitrofVKC_QJ_6bGW_92UmGuRkYBUJ4",
  authDomain: "react-80d73.firebaseapp.com",
  projectId: "react-80d73",
  storageBucket: "react-80d73.firebasestorage.app",
  messagingSenderId: "849902473929",
  appId: "1:849902473929:web:d82ccb98ac9a450245f318",
  measurementId: "G-ZLYXM4W5CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app)
 const googleprovider = new GoogleAuthProvider()
 const db = getFirestore(app) 

 export{auth,googleprovider,db}