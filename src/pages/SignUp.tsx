import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { getErrorMessage, reportError } from '../services/logger'

const SignUp = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [name]: value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await signUp?.(user.email, user.password)
      navigate('/')
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
        <button>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
