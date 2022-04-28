import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import { useAuth } from '../context/authContext'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string | undefined>('')

  const { signIn, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [name]: value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await signIn?.(user.email, user.password)
      navigate('/')
    } catch (err: any) {
      setError(err?.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle?.()
      navigate('/')
    } catch (err: any) {
      setError(err?.message)
    }
  }
  return (
    <div>
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          onChange={handleChange}
        />
        <button>SignIn</button>
      </form>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  )
}

export default SignIn
