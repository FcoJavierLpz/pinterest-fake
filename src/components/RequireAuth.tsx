import useAuth from '../hooks/useAuth'

import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/signin" state={{ from: location }} replace />

  return children
}

export default RequireAuth
