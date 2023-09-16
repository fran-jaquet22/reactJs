import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { REACT_APP_apiKey, REACT_APP_storageBucket, REACT_APP_appId, REACT_APP_authDomain, REACT_APP_projectId, REACT_APP_messagingSenderId, REACT_APP_databaseURL } from "../../configFirebase";


const firebaseConfig = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);