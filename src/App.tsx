import { Route, Routes } from 'react-router-dom'
import AuthContextProvider from './context/authContextProvider'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
