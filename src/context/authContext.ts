import { UserCredential } from 'firebase/auth'
import { createContext, useContext } from 'react'

interface AuthContextInterface {
  signUp: (email: string, password: string) => Promise<UserCredential>
  signIn: (email: string, password: string) => Promise<UserCredential>
  loginWithGoogle: () => Promise<UserCredential>
  logout: () => void
  user: object | null
  loading: boolean
}

const AuthContext = createContext<AuthContextInterface | null>(null)

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')

  return context
}

export { AuthContext, useAuth }
