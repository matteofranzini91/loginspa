import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import ProtectedRoute from './components/commons/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/refresh-password'} element={<Login />} />
      <Route path={'/register-user'} element={<Login />} />
      <Route
        path={'/welcome'}
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default memo(AppRoutes);
