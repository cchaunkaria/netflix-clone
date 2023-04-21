// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxCBRgJuPV7dW5GH-4uyYMBYH7UI-ihyE",
    authDomain: "netflix-clone-cd623.firebaseapp.com",
    projectId: "netflix-clone-cd623",
    storageBucket: "netflix-clone-cd623.appspot.com",
    messagingSenderId: "87797957834",
    appId: "1:87797957834:web:1c6e15d6fa201d70572033",
    measurementId: "G-7L85B8K3FG"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }