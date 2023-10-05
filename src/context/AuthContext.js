import React, { createContext, useState, useEffect } from 'react';
import { loginService } from '../services/auth';

// Creamos un contexto para la autenticación
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const tokenUser = localStorage.getItem('token');
    if (tokenUser) {
      setToken(tokenUser);
    }
  }, []);

  // Función para iniciar sesión
  const login = async (userData) => {
    const auth = await loginService(userData)
    setToken(auth?.data?.token);
    localStorage.setItem('token', auth?.data?.token);
  };

  // Función para cerrar sesión
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };

