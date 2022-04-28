import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import config from './config'

const FirebaseApp = initializeApp(config.firebaseConfig)

export const Providers = {
  Google: GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithSocialMedia: signInWithPopup,
  signOut
}

export const auth = getAuth(FirebaseApp)

export default FirebaseApp
