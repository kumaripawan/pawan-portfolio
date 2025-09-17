// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnf5ONHdsWlGeKfUpPT30FX9HV48ALrig",
  authDomain: "my-portfolio-88686.firebaseapp.com",
  databaseURL: "https://my-portfolio-88686-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-88686",
  storageBucket: "my-portfolio-88686.appspot.com",
  messagingSenderId: "981551438964",
  appId: "1:981551438964:web:ae97a11590bb6a5e4ec521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
