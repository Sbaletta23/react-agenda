import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBi--vCWdOzitNIfi2MjYWpQuGqdaVoCTE",
    authDomain: "react-agenda-9978f.firebaseapp.com",
    projectId: "react-agenda-9978f",
    storageBucket: "react-agenda-9978f.appspot.com",
    messagingSenderId: "154125833213",
    appId: "1:154125833213:web:90f1e5714c72604e37ff94"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
// Funcionalidades de Authenticacion 
export const FirebaseAuth = getAuth( FirebaseApp );
// Configuracion de Base de datos
export const FirebaseDB   = getFirestore( FirebaseApp );