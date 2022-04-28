import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

const SignUp = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string | undefined>('')

  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [name]: value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      await signUp(user.email, user.password)
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
        <button>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
