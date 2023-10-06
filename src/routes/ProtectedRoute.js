import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LOGIN_PATH } from '../constants/routeNames';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();
  return token ? Component : <Navigate to={LOGIN_PATH}/>;
};
