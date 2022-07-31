import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  orderBy,
  serverTimestamp,
  onSnapshot,
  query,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNMyZLKSoLrF6_eYv4NB1tLGxFeTRvhiY",
  authDomain: "facebook-clone-4804a.firebaseapp.com",
  projectId: "facebook-clone-4804a",
  storageBucket: "facebook-clone-4804a.appspot.com",
  messagingSenderId: "452273285138",
  appId: "1:452273285138:web:4f56b89b2684edad22d0cb",
  measurementId: "G-1JRFVH72J8"
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export {
  query,
  collection,
  addDoc,
  getDocs,
  getDoc,
  orderBy,
  serverTimestamp,
  onSnapshot,
};
export default db;
