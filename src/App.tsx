import { Route, Routes } from 'react-router-dom'
import AuthContextProvider from './context/authContextProvider'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import Login from './pages/Login'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
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
