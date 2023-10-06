import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importa también "Routes"
import { TaskManagement } from '../containers/TaskManagement';
import { TaskPending } from '../containers/TaskPending';
import { Login } from '../components/Login';
import { TaskCompleted } from '../containers/TaskCompleted';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuth } from '../hooks/useAuth';
import { LOGIN_PATH, TASKS_COMPLETED, TASKS_MANAGEMENT, TASKS_PENDING } from '../constants/routeNames';

const AppRoutes = () => {

  const { token } = useAuth();

  return (
    <Routes>
        <Route path={LOGIN_PATH} element={token ? <Navigate to={TASKS_MANAGEMENT} /> : <Login />} />
        <Route
            path={TASKS_MANAGEMENT}
            element={<ProtectedRoute component={<TaskManagement />} />}
        />
        <Route
            path={TASKS_PENDING}
            element={<ProtectedRoute component={<TaskPending />} />}
        />
        <Route
            path={TASKS_COMPLETED}
            element={<ProtectedRoute component={<TaskCompleted />} />}
        />
        <Route path="/" element={<Navigate to={LOGIN_PATH}/>} />
    </Routes>
  );
};

export default AppRoutes;
