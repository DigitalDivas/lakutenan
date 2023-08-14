// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiDoLx_W1o411J2TgZTR9jvwZBlU7z8Go",
  authDomain: "lakutenan-e6d4f.firebaseapp.com",
  projectId: "lakutenan-e6d4f",
  storageBucket: "lakutenan-e6d4f.appspot.com",
  messagingSenderId: "435687794384",
  appId: "1:435687794384:web:954e17547b5ec7df2520d5",
  measurementId: "G-JMV8V5GE7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();