import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: paste your own config from Firebase Console (Project settings > Your apps > Web app)
const firebaseConfig = {
  apiKey: "AIzaSyBzPvNxGtiQbdCqFFq2zIq7uw6YPdppweA",
  authDomain: "react-assignment-98a03.firebaseapp.com",
  projectId: "react-assignment-98a03",
  storageBucket: "react-assignment-98a03.firebasestorage.app",
  messagingSenderId: "765886575549",
  appId: "1:765886575549:web:51e5179e9ab0fc078998d4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
