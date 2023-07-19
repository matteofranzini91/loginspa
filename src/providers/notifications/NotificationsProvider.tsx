import React, { useState, createContext, useContext } from 'react';
import { AxiosRequestsInterceptor } from 'src/core/interceptors/AxiosRequestsInterceptor';
import { AxiosResponsesInterceptor } from 'src/core/interceptors/AxiosResponsesInterceptor';
import { FatherComponentDTO, NotificationDTO } from 'src/core/models/basic.model';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type NotificationsContextProps = {
  notification: NotificationDTO;
  setNotification: React.Dispatch<React.SetStateAction<NotificationDTO>>;
};

const NotificationsContext = createContext<NotificationsContextProps | null>(null);

const NotificationsProvider = ({ children }: FatherComponentDTO) => {
  const [notification, setNotification] = useState<NotificationDTO>({
    open: false,
    severity: 'success',
    message: ''
  });

  AxiosRequestsInterceptor();
  AxiosResponsesInterceptor(setNotification);

  const handleClose = () =>
    setNotification((notification) => ({
      ...notification,
      open: false
    }));

  return (
    <NotificationsContext.Provider value={{ notification, setNotification }}>
      {children}
      <Snackbar
        open={notification.open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;

export const useNotification = () => useContext(NotificationsContext);
