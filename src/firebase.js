// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYdgOPKnjbfNQyWjtJyvyxVHC300digbI",
    authDomain: "stryker-1156d.firebaseapp.com",
    projectId: "stryker-1156d",
    storageBucket: "stryker-1156d.firebasestorage.app",
    messagingSenderId: "79198556020",
    appId: "1:79198556020:web:2d8c051fca184ee727a621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app)