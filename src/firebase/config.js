import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVr_gBPiVtQJjkDoI1e93Xt2ckNrHU-3Y",
  authDomain: "miniblog-develany-6c022.firebaseapp.com",
  projectId: "miniblog-develany-6c022",
  storageBucket: "miniblog-develany-6c022.appspot.com",
  messagingSenderId: "300899749091",
  appId: "1:300899749091:web:451891d6734c4bd77c09d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };