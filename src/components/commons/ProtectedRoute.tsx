import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/providers/auth/AuthProvider';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useAuth();

  if (auth?.logged) return <>{children}</>;
  else return <Navigate to="/" />;
};

export default ProtectedRoute;
