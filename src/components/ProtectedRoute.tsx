import useAuth from '../hooks/useAuth'

import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/signin" />
  return <>{children}</>
}

export default ProtectedRoute
