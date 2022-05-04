type Props = {
  onClick?: () => void
  className: string
  children?: React.ReactNode
}

const SocialButton = ({ onClick, className, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`border w-12 h-12 rounded-full flex items-center justify-center shadow-xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default SocialButton
