// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUt5R-EDj3mDzLuir-BLdR67zxphiE9PY",
  authDomain: "travel-website-a1f1d.firebaseapp.com",
  projectId: "travel-website-a1f1d",
  storageBucket: "travel-website-a1f1d.firebasestorage.app",
  messagingSenderId: "380099371712",
  appId: "1:380099371712:web:2d998c165ee2761b624325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);