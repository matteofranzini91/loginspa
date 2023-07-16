import { useIsAuthenticated } from 'react-auth-kit';
import Navbar from 'src/components/commons/Navbar';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="layout-container">
      {isAuthenticated() && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
