import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/images/logo.png';
import { useAuth } from 'src/providers/auth/AuthProvider';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux-hooks';
import { cleanUserState, setLoading } from 'src/redux/slice/user-slice/user-slice';
import NavbarSkeleton from '../skeletons/NavbarSkeleton';
import { getUserState } from 'src/redux/store';
import '../../assets/scss/navbar.scss';
import { UserInitialStateDTO } from 'src/redux/slice/user-slice/types';
import { deleteUserService } from 'src/core/services/user/user.service';
import { useNotification } from 'src/providers/notifications/NotificationsProvider';

function Navbar() {
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const notification = useNotification();
  const user: UserInitialStateDTO = useAppSelector(getUserState);

  const logout = () => {
    dispatch(setLoading(true));
    auth?.logout();
    dispatch(cleanUserState());
  };

  const deleteUser = () => {
    dispatch(setLoading(true));
    deleteUserService(auth?.userId as number).then(() => {
      notification?.setNotification({
        open: true,
        severity: 'success',
        message: 'Usuario eliminado con éxito'
      });
      logout();
    });
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return user.loading ? (
    <NavbarSkeleton />
  ) : (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} className="logo" />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir ajustes">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user?.avatar ? user.avatar : ''} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={deleteUser}>
                <Typography textAlign="center">Eliminar ususario</Typography>
              </MenuItem>
              <MenuItem onClick={logout}>
                <Typography textAlign="center">Salir</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
