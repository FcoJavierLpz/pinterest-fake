import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Alert from '../components/Alert'
import useAuth from '../hooks/useAuth'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string | undefined>('')

  type LocationProps = {
    state: {
      from: Location
    }
  }

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const { signIn, loginWithGoogle } = useAuth()

  const from = location.state?.from?.pathname || '/'

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [name]: value })

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setError('')
    try {
      await signIn?.(user.email, user.password)

      navigate(from, { replace: true })
    } catch (err: any) {
      setError(err?.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle?.()

      navigate(from, { replace: true })
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
