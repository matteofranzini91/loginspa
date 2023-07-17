import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FatherComponentDTO } from 'src/core/models/basic.model';
import { loginService, logoutService } from 'src/core/services/log.services';

type AuthContextProps = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  login: (email: string, password: string) => void;
  logout: (email: string) => void;
};

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: FatherComponentDTO) => {
  const sessionStorageValue = sessionStorage.getItem('loggedIn');
  const [logged, setLogged] = useState<boolean>(
    sessionStorageValue ? JSON.parse(sessionStorageValue) : false
  );
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    loginService(email, password).then((res) => {
      sessionStorage.setItem('token', res.data.token);
      sessionStorage.setItem('loggedIn', 'true');
      setLogged(true);
      navigate('/welcome');
    });
  };

  const logout = (email: string) => {
    logoutService(email).then(() => {
      sessionStorage.clear();
      setLogged(false);
      navigate('/');
    });
  };

  return (
    <AuthContext.Provider value={{ logged, setLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
