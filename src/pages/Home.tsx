import Gallery from '../components/Gallery'
import NavBar from '../components/NavBar'
import useAuth from '../hooks/useAuth'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="w-full min-h-screen font-sans text-gray-900">
      <NavBar />
      <main className="py-14 px-4 mx-auto max-w-7xl">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">
            Bienvenido {user?.displayName || user?.email}
          </h1>
        </div>
        <Gallery />
      </main>
    </div>
  )
}

export default Home
