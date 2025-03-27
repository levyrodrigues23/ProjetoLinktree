import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4omGJ-LPKyvUsgzFckJXW0bkXX4clFdM",
  authDomain: "devlinks-ded09.firebaseapp.com",
  projectId: "devlinks-ded09",
  storageBucket: "devlinks-ded09.firebasestorage.app",
  messagingSenderId: "103841669574",
  appId: "1:103841669574:web:63a4a757e10aa565dd12c7",
  measurementId: "G-LM2J8Q9QJF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, analytics };