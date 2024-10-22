import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  // Si no hay usuario autenticado, redirige al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}