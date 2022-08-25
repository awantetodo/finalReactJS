import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6e8BkvUwtPiOY9rAOQej1iSpghXP7-HU",
  authDomain: "larutadelacocina-3c081.firebaseapp.com",
  projectId: "larutadelacocina-3c081",
  storageBucket: "larutadelacocina-3c081.appspot.com",
  messagingSenderId: "830868699685",
  appId: "1:830868699685:web:76f0638ce4900cf7799dcc",
  measurementId: "G-939Y05XMDW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);