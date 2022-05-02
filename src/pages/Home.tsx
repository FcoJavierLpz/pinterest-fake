import Gallery from '../components/Gallery'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900">
      <NavBar />
      <main className="py-14 px-4 mx-auto max-w-7xl">
        <Gallery />
      </main>
    </div>
  )
}

export default Home
