// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
import { collection, getDocs } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwmXYgz-2i7ZFZcFjmTh55aWQKsfGGSxk",
  authDomain: "mikabona-shop.firebaseapp.com",
  projectId: "mikabona-shop",
  storageBucket: "mikabona-shop.appspot.com",
  messagingSenderId: "573898275983",
  appId: "1:573898275983:web:6304cf93ce0e41561c84fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
