import Logo from '../components/icons/Logo'
import Hamburguer from '../components/icons/Hamburguer'
import useAuth from '../hooks/useAuth'

const NavBar = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex gap-x-2 justify-between items-center md:gap-x-6 h-18">
          <button className="inline-block md:hidden">
            <Hamburguer className="w-6 h-6 text-gray-900" />
          </button>
          <a className="hidden md:inline-block" href="#">
            <Logo fill="#e60023" />
          </a>
          <input
            className="hidden sm:inline-block flex-1 py-1.5 px-4 mx-4 text-gray-700 bg-gray-100 rounded-full border border-gray-100 transition focus:outline-none focus:bg-white focus:border-gray-700"
            type="text"
            placeholder="Search"
          />
          <div className="flex flex-row-reverse gap-x-2 items-center md:gap-x-4 lg:flex-row">
            <button
              className="hidden lg:inline-block py-1.5 px-5 rounded-full border border-gray-200"
              onClick={handleLogout}
            >
              SignOut
            </button>
            <button className="object-cover overflow-hidden w-10 h-10 rounded-full border border-gray-200">
              <img
                src="https://tailwindcollections-gallery-page.netlify.app/img/avatar-1.jpeg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
