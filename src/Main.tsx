import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './assets/scss/layout.scss';
import Layout from './layout/Layout';
import AuthProvider from './providers/auth/AuthProvider';
import NotificationsProvider from './providers/notifications/NotificationsProvider';

const Main = () => {
  return (
    <BrowserRouter>
      <NotificationsProvider>
        <AuthProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </AuthProvider>
      </NotificationsProvider>
    </BrowserRouter>
  );
};

export default Main;
