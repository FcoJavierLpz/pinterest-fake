type Props = {
  onClick: () => void
  text: string
  className: string
}

const Button = ({ onClick, text, className }: Props) => {
  return (
    <button type="submit" onClick={onClick} className={className}>
      {text}
    </button>
  )
}

export default Button
