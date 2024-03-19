import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYccGyEuTtqbgtQaaesn9Drp7BrcYDqwQ",
  authDomain: "fir-auth-818ff.firebaseapp.com",
  projectId: "fir-auth-818ff",
  storageBucket: "fir-auth-818ff.appspot.com",
  messagingSenderId: "40568422109",
  appId: "1:40568422109:web:05b3ac7be9811a3f1c6534",
  measurementId: "G-XQ6GBRN0KG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
