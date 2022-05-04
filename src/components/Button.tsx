import Loading from './icons/Loading'

type Props = {
  onClick: () => void
  text: string
  className: string
  loading: boolean
}

const Button = ({ onClick, text, className, loading }: Props) => {
  return (
    <button type="submit" onClick={onClick} className={className}>
      {!loading ? (
        text
      ) : (
        <>
          <Loading className="inline w-7 h-7 mr-2 animate-spin" />
          Loading...
        </>
      )}
    </button>
  )
}

export default Button
