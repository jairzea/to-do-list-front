import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ component: Component }) => {
  const { token } = useAuth();
  return token ? Component : <Navigate to="/login" />;
};
