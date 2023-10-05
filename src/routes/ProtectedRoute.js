import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return isAuthenticated ? (
    <Route {...rest} element={<Component {...rest} />} />
  ) : (
    <Navigate to="/login" />
  );
};
