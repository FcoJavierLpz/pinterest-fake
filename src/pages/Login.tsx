import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import imgBackground from '../assets/bg-right.svg'
import FormCheckbox from '../components/FormCheckbox'
import FormError from '../components/FormError'
import FormInput from '../components/FormInput'
import useAuth from '../hooks/useAuth'
import { firebaseErrors, isFirebaseError } from '../utils/firebaseErrors'
import { formValidate } from '../utils/formValidate'

const SignIn = () => {
  type LocationProps = {
    state: {
      from: Location
    }
  }

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const { signUp, signIn, loginWithGoogle } = useAuth()

  const { required, patternEmail, minLength } = formValidate()

  type FormValues = {
    username: string
    email: string
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormValues>()

  const from = location.state?.from?.pathname || '/'

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
  const LoginUser = async ({ email, password }) => {
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

  return (
    <div className="max-w-7xl relative z-10 m-auto px-6 grid h-screen">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center">
        <div className="bg-white rounded-lg p-10 sm:m-auto md:m-auto lg:m-0">
          <div className="sm:w-full m-auto lg:m-0 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
              Create Account
            </h1>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleGoogleSignIn}
                id="google"
                className="border hover:bg-[#DB4437] w-12 h-12 fill-[#DB4437] hover:fill-white border-pink-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-pink-500/50 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                </svg>
              </button>
              <button className="border hover:bg-[#1877f2] w-12 h-12 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full inline-flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </button>
              <button className="border hover:bg-[#1d9bf0] w-12 h-12 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </button>
            </div>
            <p className="mt-10 mb-5 text-gray-600">
              or use your email for registration
            </p>
            <div className="w-full text-left">
              <form onSubmit={evt => evt.preventDefault()}>
                <div>
                  <FormInput
                    type="text"
                    placeholder="Username"
                    {...register('username', {
                      required,
                      minLength
                    })}
                    error={errors.username}
                  />
                  <FormError error={errors.username} />
                </div>
                <div>
                  <FormInput
                    type="email"
                    placeholder="Email address"
                    {...register('email', {
                      required,
                      pattern: patternEmail
                    })}
                    error={errors.email}
                  />
                  <FormError error={errors.email} />
                </div>
                <div className="mt-2">
                  <FormInput
                    type="password"
                    placeholder="Password"
                    {...register('password', {
                      required,
                      minLength
                    })}
                    error={errors.password}
                  />
                  <FormError error={errors.password} />
                </div>
                <div className="mt-3 flex flex-col md:flex-row justify-between">
                  <FormCheckbox />
                </div>
                <div className="mt-10">
                  <div className="flex gap-5">
                    <button
                      onClick={handleSubmit(createUser)}
                      type="submit"
                      className="w-full flex justify-center py-3 px-5 border border-transparent text-md font-medium rounded-md text-white bg-orange-600 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={handleSubmit(LoginUser)}
                      type="submit"
                      className="w-full flex justify-center py-3 px-5 text-md font-medium rounded-md  border border-orange-600 text-orange-600 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 lg:pt-0 m-auto lg:m-0 hidden lg:block select-none">
          <img
            className="rounded-lg lg:ml-4"
            src={imgBackground}
            alt="The new Tailwind"
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn
