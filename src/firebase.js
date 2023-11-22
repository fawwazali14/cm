import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSwrYlN0mkhsMxM0EPLltJPpEb15p8B2o",
  authDomain: "carematch-a597f.firebaseapp.com",
  projectId: "carematch-a597f",
  storageBucket: "carematch-a597f.appspot.com",
  messagingSenderId: "630113846205",
  appId: "1:630113846205:web:e853cf5be0f41ed378c8d4",
  measurementId: "G-VHFZ2L5FYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Create Google Auth Provider instance



export  {auth,provider};