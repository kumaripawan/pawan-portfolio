// app/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAnf5ONHdsWlGeKfUpPT30FX9HV48ALrig",
  authDomain: "my-portfolio-88686.firebaseapp.com",
  databaseURL: "https://my-portfolio-88686-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-88686",
  storageBucket: "my-portfolio-88686.firebasestorage.app",
  messagingSenderId: "981551438964",
  appId: "1:981551438964:web:ae97a11590bb6a5e4ec521",
  measurementId: "G-6H84KENLK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Realtime Database
export const db = getDatabase(app);

// Export Analytics (guarded for environments like SSR)
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
