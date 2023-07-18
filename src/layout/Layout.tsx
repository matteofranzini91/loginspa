import { memo } from 'react';
import { useAuth } from 'src/providers/auth/AuthProvider';
import Navbar from 'src/components/commons/Navbar';
import { FatherComponentDTO } from 'src/core/models/basic.model';

const Layout = ({ children }: FatherComponentDTO) => {
  const auth = useAuth();

  return (
    <div className="layout-container">
      {auth?.logged && <Navbar />}
      {children}
    </div>
  );
};

export default memo(Layout);
