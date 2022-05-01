import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from 'firebase/auth'
import { useEffect, useState } from 'react'

import { auth } from '../config/firebase'
import { AuthContext } from './authContext'

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(auth.currentUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())

  const logout = () => signOut(auth)

  const value = { signUp, signIn, loginWithGoogle, logout, user, loading }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
