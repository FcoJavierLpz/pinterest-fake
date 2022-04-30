import { UserCredential, User } from 'firebase/auth'
import { createContext } from 'react'

interface AuthContextInterface {
  signUp?: (email: string, password: string) => Promise<UserCredential>
  signIn?: (email: string, password: string) => Promise<UserCredential>
  loginWithGoogle?: () => Promise<UserCredential>
  logout: () => void
  user: User | null
  loading: boolean
}

const authContextDefaults: AuthContextInterface = {
  logout: () => null,
  user: null,
  loading: true
}

const AuthContext = createContext<AuthContextInterface>(authContextDefaults)

export { AuthContext }
