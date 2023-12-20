import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCqe5eWwNHo8SL0y31bktdOucSnEgZndPM",
    authDomain: "restraunt-website-f3e79.firebaseapp.com",
    projectId: "restraunt-website-f3e79",
    storageBucket: "restraunt-website-f3e79.appspot.com",
    messagingSenderId: "468601965646",
    appId: "1:468601965646:web:117ab74b674b2091bf071f",
    measurementId: "G-GPJGEN6N6J"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
 export const storage = getStorage(app);