import Button from '../components/Button'
import FormCheckbox from '../components/FormCheckbox'
import FormError from '../components/FormError'
import FormInput from '../components/FormInput'
import Facebook from '../components/icons/Facebook'
import Google from '../components/icons/Google'
import Twitter from '../components/icons/Twitter'
import SocialButton from '../components/SocialButton'
import useLogin from '../hooks/useLogin'
import { formValidate } from '../utils/formValidate'

const FormLogin = () => {
  const { required, patternEmail, minLength } = formValidate()
  const {
    register,
    handleSubmit,
    errors,
    loading,
    createUser,
    loginUser,
    handleGoogleSignIn
  } = useLogin()

  return (
    <div className="sm:w-full m-auto lg:m-0 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
        Create Account
      </h1>
      <div className="flex gap-4 justify-center">
        <SocialButton
          onClick={handleGoogleSignIn}
          className="hover:bg-[#DB4437] fill-[#DB4437] hover:fill-white border-pink-200 hover:shadow-pink-500/50"
        >
          <Google />
        </SocialButton>
        <SocialButton className="hover:bg-[#1877f2] fill-[#1877f2] hover:fill-white border-blue-200 hover:shadow-blue-500/50">
          <Facebook />
        </SocialButton>
        <SocialButton className="hover:bg-[#1d9bf0] fill-[#1d9bf0] hover:fill-white border-blue-200 hover:shadow-sky-500/50">
          <Twitter />
        </SocialButton>
      </div>
      <p className="mt-10 mb-5 text-gray-600">
        or use your email for registration
      </p>
      <div className="w-full text-left">
        <form onSubmit={evt => evt.preventDefault()}>
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
          <div className="mt-3 flex flex-col md:flex-row justify-between">
            <FormCheckbox />
          </div>
          <div className="mt-10">
            <div className="flex gap-5">
              <Button
                loading={loading?.isRegistering}
                onClick={handleSubmit(createUser)}
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-md font-medium rounded-md text-white bg-orange-600 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
                text="Sign Up"
              />
              <Button
                loading={loading?.isLoggedIn}
                onClick={handleSubmit(loginUser)}
                className="w-full flex items-center justify-center py-3 px-5 text-md font-medium rounded-md  border border-orange-600 text-orange-600 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
                text="Sign In"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormLogin
