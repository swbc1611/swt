import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyDCtU9Lc0JcAGi5FTiM8fZe_afRyCS6SGw", 
    authDomain: "soulwinning-tracker-d253c.firebaseapp.com", 
    projectId: "soulwinning-tracker-d253c", 
    storageBucket: "soulwinning-tracker-d253c.firebasestorage.app", 
    messagingSenderId: "589304661785", 
    appId: "1:589304661785:web:41cb41d743adadbdb7e788" 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);