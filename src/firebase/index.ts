// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from "firebase/auth";

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

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
}
export const signInwithEmailAndPassword = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export type User = {
  displayName: string,
  email: string,
  photo: string,
  role: string
  id: string
}

export const addUsers = async (user: User) => {
  await setDoc(doc(db, "users", `${user.id}`), user);
}

export const setCurrentUser = async (user: User) => {
  const docRef = await addDoc(collection(db, "currentUser"), user);
  console.log("Document written with ID: ", docRef.id);
}
