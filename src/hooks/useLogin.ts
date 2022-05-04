import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import { firebaseErrors, isFirebaseError } from '../utils/firebaseErrors'

const useLogin = () => {
  type LocationProps = {
    state: {
      from: Location
    }
  }

  type FormValues = {
    username: string
    email: string
    password: string
  }

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const { signUp, signIn, loginWithGoogle } = useAuth()

  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormValues>()

  const createUser: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      await signUp?.(email, password)
      navigate('/')
    } catch (error) {
      if (isFirebaseError(error)) {
        const { code, message } = firebaseErrors(error)
        setError(code, { message })
      }
    }
  }
  const loginUser = async ({ email, password }) => {
    try {
      await signIn?.(email, password)

      navigate(from, { replace: true })
    } catch (error) {
      if (isFirebaseError(error)) {
        const { code, message } = firebaseErrors(error)
        setError(code, { message })
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle?.()

      navigate(from, { replace: true })
    } catch (error) {
      if (isFirebaseError(error)) {
        const { code, message } = firebaseErrors(error)
        setError(code, { message })
      }
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    createUser,
    loginUser,
    handleGoogleSignIn
  }
}

export default useLogin
