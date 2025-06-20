import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh2H_OT_04Mmnmp_NBVy3xUeMlX8n1qbU",
  authDomain: "bitcoin-f20b5.firebaseapp.com",
  projectId: "bitcoin-f20b5",
  storageBucket: "bitcoin-f20b5.appspot.com", 
  messagingSenderId: "207867846502",
  appId: "1:207867846502:web:a596672fbd057932c8b2a7"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

