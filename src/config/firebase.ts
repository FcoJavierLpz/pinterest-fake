import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import config from './config'

const FirebaseApp = initializeApp(config.firebaseConfig)

export const Providers = {
  google: GoogleAuthProvider
}

export const auth = getAuth(FirebaseApp)
export default FirebaseApp
