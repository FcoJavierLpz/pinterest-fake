import useAuth from '../hooks/useAuth'

import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return <Navigate to="/signin" state={{ from: location }} replace />

  return children
}

export default RequireAuth
