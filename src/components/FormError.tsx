import { FieldError } from 'react-hook-form'

type Props = {
  error: FieldError | undefined
}

const FormError = ({ error }: Props) => {
  return (
    <>
      {error && (
        <p className="mt-2 text-sm text-red-600">
          <span className="font-medium">Oops! </span>
          {error.message}
        </p>
      )}
    </>
  )
}

export default FormError
