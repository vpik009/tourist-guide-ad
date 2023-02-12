import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAbxA_ajhYdMWM440TUyfBwUnEj79bwjSg",
  authDomain: "alex-tour-d6856.firebaseapp.com",
  databaseURL: "https://alex-tour-d6856-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alex-tour-d6856",
  storageBucket: "alex-tour-d6856.appspot.com",
  messagingSenderId: "370149539208",
  appId: "1:370149539208:web:9aff923329429176b60e3d",
}

// init firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const auth = getAuth(app)

console.log('FB App: ', app)

export { db }