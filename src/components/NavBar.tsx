import Logo from '../components/icons/Logo'
import Hamburguer from '../components/icons/Hamburguer'
import useAuth from '../hooks/useAuth'

const NavBar = () => {
  const { user, logout } = useAuth()

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
          <h1 className="text-2xl font-medium">
            Bienvenido {user?.displayName || user?.email}
          </h1>
          <div className="flex flex-row-reverse gap-x-2 items-center md:gap-x-4 lg:flex-row">
            <button
              className="hidden lg:inline-block py-1.5 px-5 rounded-full border border-gray-200"
              onClick={handleLogout}
            >
              SignOut
            </button>
            <button className="object-cover overflow-hidden w-10 h-10 rounded-full border border-gray-200">
              <img
                src={
                  user?.photoURL ||
                  'https://tailwindcollections-gallery-page.netlify.app/img/avatar-1.jpeg'
                }
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
