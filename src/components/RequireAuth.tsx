import useAuth from '../hooks/useAuth'

import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <h1>Loading</h1>

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />

  return children
}

export default RequireAuth
