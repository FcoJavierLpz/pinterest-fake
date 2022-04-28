import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getErrorMessage, reportError } from '../services/logger'
import useAuth from '../hooks/useAuth'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

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

    try {
      await signIn?.(user.email, user.password)

      navigate(from, { replace: true })
    } catch (err) {
      reportError({ message: getErrorMessage(err) })
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle?.()

      navigate(from, { replace: true })
    } catch (err) {
      reportError({ message: getErrorMessage(err) })
    }
  }

  return (
    <div>
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
