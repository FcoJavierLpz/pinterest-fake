import React from 'react'

type LoadingProps = {
  className?: string
  fill?: string
}

const Loading = ({ className, fill }: LoadingProps) => {
  return (
    <svg
      className={className}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.05"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C12.9193 19 13.8295 18.8189 14.6788 18.4672C15.5281 18.1154 16.2997 17.5998 16.9497 16.9497C17.5998 16.2997 18.1154 15.5281 18.4672 14.6788C18.8189 13.8295 19 12.9193 19 12C19 11.0807 18.8189 10.1705 18.4672 9.32122C18.1154 8.47194 17.5998 7.70026 16.9497 7.05025C16.2997 6.40024 15.5281 5.88463 14.6788 5.53284C13.8295 5.18106 12.9193 5 12 5C10.1435 5 8.36301 5.7375 7.05025 7.05025C5.7375 8.36301 5 10.1435 5 12C5 13.8565 5.7375 15.637 7.05025 16.9497C8.36301 18.2625 10.1435 19 12 19V19ZM12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
        fill="black"
      />
      <path
        d="M3.5 12C2.67157 12 1.98817 11.3245 2.11096 10.5052C2.75935 6.17893 6.17893 2.75935 10.5052 2.11096C11.3245 1.98817 12 2.67157 12 3.5V3.5C12 4.32843 11.3209 4.9839 10.5114 5.16009C9.21047 5.44324 8.00632 6.09419 7.05025 7.05025C6.09419 8.00632 5.44324 9.21047 5.16009 10.5114C4.9839 11.3209 4.32843 12 3.5 12V12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Loading
