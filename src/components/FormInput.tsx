import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

type FormProps = {
  type: string
  name: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  label?: string
  error?: FieldError
  children?: React.ReactNode
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, FormProps> = (
  { type, name, placeholder, onChange, onBlur, label, error, children },
  ref
) => {
  const errorClassLabel = error
    ? 'block mb-2 text-sm font-medium text-red-700 leading-8'
    : 'block mb-2 text-sm font-medium text-gray-900 leading-8'

  const errorClassInput = error
    ? 'appearance-none px-4 py-3 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 sm:text-sm sm:leading-5 rounded-md focus:outline-none focus:shadow-outline-red focus:border-red-300 block w-full p-2.5 transition duration-150 ease-in-out'
    : 'appearance-none px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 sm:text-sm sm:leading-5 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 block w-full p-2.5 transition duration-150 ease-in-out'

  return (
    <>
      <label htmlFor={name} className={errorClassLabel}>
        {label}
      </label>
      <div className="mt-2 rounded-md">
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className={errorClassInput}
        />
      </div>
      {children}
    </>
  )
}

export default forwardRef(FormInput)
