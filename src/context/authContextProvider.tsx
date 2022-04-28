import { useEffect, useState } from 'react'
import { auth, Providers } from '../config/firebase'
import { AuthContext } from './authContext'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = Providers.onAuthStateChanged(
      auth,
      (currentUser: object | null) => {
        setUser(currentUser)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  const signUp = (email: string, password: string) =>
    Providers.createUserWithEmailAndPassword(auth, email, password)

  const signIn = (email: string, password: string) =>
    Providers.signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = () =>
    Providers.signInWithSocialMedia(auth, new Providers.Google())

  const logout = () => Providers.signOut(auth)

  const value = { signUp, signIn, loginWithGoogle, logout, user, loading }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
