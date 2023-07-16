import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './assets/scss/layout.scss';
import Layout from './layout/Layout';

const Main = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default Main;
