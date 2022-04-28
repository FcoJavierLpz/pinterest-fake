import { Link } from 'react-router-dom'
import imgError404 from '../assets/error404.svg'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      <img
        className="w-full object-cover md:h-full md:w-1/2"
        src={imgError404}
        alt="404"
      />
      <Link
        to="/"
        className="w-32 flex justify-center py-3 px-5 text-md font-medium rounded-md  border border-orange-700 text-orange-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
      >
        Volver
      </Link>
    </div>
  )
}

export default NotFound
