import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './assets/scss/layout.scss';
import Layout from './layout/Layout';
import AuthProvider from './providers/auth/AuthProvider';
import NotificationsProvider from './providers/notifications/NotificationsProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Main = () => {
  return (
    <BrowserRouter>
      <NotificationsProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AuthProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </AuthProvider>
        </LocalizationProvider>
      </NotificationsProvider>
    </BrowserRouter>
  );
};

export default Main;
