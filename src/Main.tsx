import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './assets/scss/layout.scss';
import Layout from './layout/Layout';
import { AuthProvider } from 'react-auth-kit';

const Main = () => {
  return (
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      //cookieDomain={window.location.hostname}
      //cookieSecure={window.location.protocol === 'https:'}
    >
      <Layout>
        <BrowserRouter basename="/">
          <AppRoutes />
        </BrowserRouter>
      </Layout>
    </AuthProvider>
  );
};

export default Main;
