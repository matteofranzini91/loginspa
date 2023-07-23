import { memo, useEffect, useState } from 'react';
import { useAuth } from 'src/providers/auth/AuthProvider';
import Navbar from 'src/components/commons/Navbar';
import { FatherComponentDTO } from 'src/core/models/basic.model';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux-hooks';
import { fetchUser } from 'src/redux/slice/user-slice/user-async-actions';
import { getUserState } from 'src/redux/store';
import { Typography } from '@mui/material';

const Layout = ({ children }: FatherComponentDTO) => {
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const fetchingUser = useAppSelector(getUserState);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log('windowWidth ============> ', windowWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    if (auth?.userId && fetchingUser.loading) dispatch(fetchUser(auth.userId));
  }, [auth]);

  return windowWidth < 1360 ? (
    <Typography variant="h2" className="no-resolution">
      Esta aplicación no es del todo responsiva. Es posible usarla desde una resolución de 1366px o
      superior.
    </Typography>
  ) : (
    <div className="layout-container">
      {auth?.logged && <Navbar />}
      {children}
    </div>
  );
};

export default memo(Layout);
