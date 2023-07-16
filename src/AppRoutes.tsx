import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import { RequireAuth } from 'react-auth-kit';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/refresh-password'} element={<Login />} />
      <Route path={'/register-user'} element={<Login />} />
      <Route
        path={'/welcome'}
        element={
          <RequireAuth loginPath={'/'}>
            <Welcome />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
