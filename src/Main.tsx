import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './assets/scss/layout.scss';
import Layout from './layout/Layout';
import { AuthProvider } from 'react-auth-kit';
import SessionProvider from './providers/SessionProvider';

const Main = () => {
  return (
    <AuthProvider authType={'localstorage'} authName={'_auth'}>
      <BrowserRouter basename="/">
        <SessionProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </SessionProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Main;
