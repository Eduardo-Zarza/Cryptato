import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBzpNIg3tOJ_f7Bz2UcR-GdrtDlj67njB8",
    authDomain: "cryptato-4dcd3.firebaseapp.com",
    projectId: "cryptato-4dcd3",
    storageBucket: "cryptato-4dcd3.firebasestorage.app",
    messagingSenderId: "896128521311",
    appId: "1:896128521311:web:8d44b8927071fd657777ea",
    measurementId: "G-CKMPL02NN8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
