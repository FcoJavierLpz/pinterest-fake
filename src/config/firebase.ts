import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import config from './config'

const FirebaseApp = initializeApp(config.firebaseConfig)

export const auth = getAuth(FirebaseApp)

export default FirebaseApp
