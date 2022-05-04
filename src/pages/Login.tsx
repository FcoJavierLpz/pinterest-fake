import imgBackground from '../assets/bg-right.svg'

import FormLogin from '../components/FormLogin'

const SignIn = () => {
  return (
    <div className="max-w-7xl relative z-10 m-auto px-6 grid h-screen">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center">
        <div className="bg-white rounded-lg p-10 sm:m-auto md:m-auto lg:m-0">
          <FormLogin />
        </div>
        <div className="text-center pt-10 lg:pt-0 m-auto lg:m-0 hidden lg:block select-none">
          <img
            className="rounded-lg lg:ml-4"
            src={imgBackground}
            alt="zero waster"
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn
