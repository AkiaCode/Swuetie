// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDagjpjET8E5AGZ62jqfF_v0FkA_NaVgfs",
  authDomain: "swuetie.firebaseapp.com",
  projectId: "swuetie",
  storageBucket: "swuetie.appspot.com",
  messagingSenderId: "929287419162",
  appId: "1:929287419162:web:1e505fef8e3d705e7a68a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
