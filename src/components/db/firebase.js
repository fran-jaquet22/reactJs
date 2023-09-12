import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXalPvvmbRxn3T3KjSLgpnbXnQjUdQ0EQ",
  authDomain: "listalara-fc6f6.firebaseapp.com",
  databaseURL: "https://listalara-fc6f6-default-rtdb.firebaseio.com",
  projectId: "listalara-fc6f6",
  storageBucket: "listalara-fc6f6.appspot.com",
  messagingSenderId: "399281758388",
  appId: "1:399281758388:web:9fc50a28982d2ab3f037e1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);