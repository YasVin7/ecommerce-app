import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9EHS_Z9uz0EgU0nxh4D7kACuLAAiVHyE",
  authDomain: "ecommerceapp-e938f.firebaseapp.com",
  projectId: "ecommerceapp-e938f",
  storageBucket: "ecommerceapp-e938f.appspot.com",
  messagingSenderId: "403232767452",
  appId: "1:403232767452:web:377c25587c623352cae319",
  measurementId: "G-EMHGH91GP3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log(app);
console.log(auth);
