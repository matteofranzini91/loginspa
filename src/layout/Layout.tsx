import { memo, useEffect } from 'react';
import { useAuth } from 'src/providers/auth/AuthProvider';
import Navbar from 'src/components/commons/Navbar';
import { FatherComponentDTO } from 'src/core/models/basic.model';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux-hooks';
import { fetchUser } from 'src/redux/slice/user-slice/user-async-actions';
import { getUserState } from 'src/redux/store';

const Layout = ({ children }: FatherComponentDTO) => {
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const fetchingUser = useAppSelector(getUserState);

  useEffect(() => {
    if (auth?.userId && fetchingUser.loading) dispatch(fetchUser(auth.userId));
  }, [auth]);

  return (
    <div className="layout-container">
      {auth?.logged && <Navbar />}
      {children}
    </div>
  );
};

export default memo(Layout);
