import { useState, createContext, useContext, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FatherComponentDTO } from 'src/core/models/basic.model';
import { loginService, logoutService } from 'src/core/services/login/log.service';
import { getAuthUserService } from 'src/core/services/user/user.service';

type AuthContextProps = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  logging: boolean;
  userId: number | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: FatherComponentDTO) => {
  const sessionStorageValue = sessionStorage.getItem('loggedIn');
  const [logged, setLogged] = useState<boolean>(
    sessionStorageValue ? JSON.parse(sessionStorageValue) : false
  );
  const [logging, setLogging] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorageValue) getAuthUserService().then((res) => setUserId(res.data.id));
  }, []);

  const login = (email: string, password: string) => {
    setLogging(true);
    loginService(email, password)
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('loggedIn', 'true');
        setUserId(res.data.id);
        setLogged(true);
        navigate('/welcome');
        setLogging(false);
      })
      .catch(() => setLogging(false));
  };

  const logout = () => {
    logoutService().then(() => {
      sessionStorage.clear();
      setLogged(false);
      setUserId(null);
      navigate('/');
    });
  };

  return (
    <AuthContext.Provider value={{ logged, setLogged, logging, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);

export const useAuth = () => useContext(AuthContext);
