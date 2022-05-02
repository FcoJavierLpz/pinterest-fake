import useAuth from '../hooks/useAuth'

import { Navigate, useLocation } from 'react-router-dom'
import Loading from './icons/Loading'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading className="w-12 h-12 text-indigo-600 animate-spin" />
      </div>
    )

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />

  return children
}

export default RequireAuth
