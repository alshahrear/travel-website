import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUt5R-EDj3mDzLuir-BLdR67zxphiE9PY",
  authDomain: "travel-website-a1f1d.firebaseapp.com",
  projectId: "travel-website-a1f1d",
  storageBucket: "travel-website-a1f1d.appspot.com",
  messagingSenderId: "380099371712",
  appId: "1:380099371712:web:2d998c165ee2761b624325",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
