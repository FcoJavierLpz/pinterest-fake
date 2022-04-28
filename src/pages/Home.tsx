import { useAuth } from '../context/authContext'

const Home = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>Welcome {user.displayName || user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
