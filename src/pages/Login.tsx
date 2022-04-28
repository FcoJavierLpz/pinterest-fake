import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getErrorMessage, reportError } from '../services/logger'
import useAuth from '../hooks/useAuth'

const Login = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  type LocationProps = {
    state: {
      from: Location
    }
  }

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const { signUp, signIn, loginWithGoogle } = useAuth()

  const from = location.state?.from?.pathname || '/'

  const createUser = async () => {
    try {
      await signUp?.(
        emailRef.current?.value ?? '',
        passwordRef.current?.value ?? ''
      )
      navigate('/')
    } catch (err) {
      reportError({ message: getErrorMessage(err) })
    }
  }
  const LoginUser = async () => {
    try {
      await signIn?.(
        emailRef.current?.value ?? '',
        passwordRef.current?.value ?? ''
      )

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
      <h1>Create Account</h1>
      <div className="login-with-social-media">social media</div>
      <p>or use your email for registration</p>
      <form onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="name"></label>
        <input type="text" name="name" placeholder="Name" ref={nameRef} />

        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          ref={emailRef}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input type="checkbox" name="agreeTerms" id="agreeTerms" />
        <button
          className="bg-orange-100 px-4 py-3 border border-orange-200 border-r-2 m-1"
          onClick={createUser}
        >
          SignUp
        </button>
        <button
          className="px-4 py-3 border border-orange-200 border-r-2"
          onClick={LoginUser}
        >
          SignIn
        </button>
      </form>
      <button
        className="bg-blue-100 px-4 py-3 border border-blue-200 border-r-2 m-1"
        onClick={handleGoogleSignIn}
      >
        Google Login
      </button>
    </div>
  )
}

export default Login
