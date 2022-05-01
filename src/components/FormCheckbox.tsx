const FormCheckbox = () => {
  return (
    <div className="flex items-center">
      <input
        id="remember-me"
        type="checkbox"
        className="form-checkbox h-4 w-4 accent-orange-600 transition duration-150 ease-in-out"
      />
      <label
        htmlFor="remember-me"
        className="ml-2 block text-sm leading-5 text-gray-900"
      >
        I agree to the{' '}
        <a href="#" className="text-orange-600">
          Terms
        </a>{' '}
        and{' '}
        <a href="#" className="text-orange-600">
          Privacy Policy
        </a>
      </label>
    </div>
  )
}

export default FormCheckbox
