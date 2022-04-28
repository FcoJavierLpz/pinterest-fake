import { UserCredential } from 'firebase/auth'
import { createContext } from 'react'

interface AuthContextInterface {
  signUp?: (email: string, password: string) => Promise<UserCredential>
  signIn?: (email: string, password: string) => Promise<UserCredential>
  loginWithGoogle?: () => Promise<UserCredential>
  logout: () => void
  user: { displayName: string; email: string }
}

const authContextDefaults: AuthContextInterface = {
  logout: () => null,
  user: { displayName: '', email: '' }
}

const AuthContext = createContext<AuthContextInterface>(authContextDefaults)

export { AuthContext }
