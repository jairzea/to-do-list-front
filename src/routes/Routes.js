import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importa también "Routes"

import { TaskManagement } from '../containers/TaskManagement';
import { TaskPending } from '../containers/TaskPending';
import { Login } from '../components/Login';
import { TaskCompleted } from '../containers/TaskCompleted';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuth } from '../hooks/useAuth';

const AppRoutes = () => {

  const { token } = useAuth(); 

  return (
    <Routes>
        <Route path="/login" element={token ? <Navigate to="/tasks" /> : <Login />} />
        <Route
            path="/tasks"
            element={<ProtectedRoute component={<TaskManagement />} />}
        />
        <Route
            path="/tasks/pending"
            element={<ProtectedRoute component={<TaskPending />} />}
        />
        <Route
            path="/tasks/completed"
            element={<ProtectedRoute component={<TaskCompleted />} />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
