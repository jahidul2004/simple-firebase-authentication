// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2aVUAvGT4g3JI7Vhy8mrIhg17It3t_4c",
  authDomain: "auth-moha-milon-aad08.firebaseapp.com",
  projectId: "auth-moha-milon-aad08",
  storageBucket: "auth-moha-milon-aad08.firebasestorage.app",
  messagingSenderId: "590552863058",
  appId: "1:590552863058:web:9dd76dd439c65d3c222a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);