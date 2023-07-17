import React, { useState, createContext, useContext } from 'react';
import { AxiosRequestsInterceptor } from 'src/core/interceptors/AxiosRequestsInterceptor';
import { AxiosResponsesInterceptor } from 'src/core/interceptors/AxiosResponsesInterceptor';
import { FatherComponentDTO } from 'src/core/models/basic.model';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationsContext = createContext<null>(null);

const NotificationsProvider = ({ children }: FatherComponentDTO) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity /* , setSeverity */] = useState<'success' | 'info' | 'warning' | 'error'>(
    'error'
  );

  AxiosRequestsInterceptor();
  AxiosResponsesInterceptor(setOpen, setMessage);

  const handleClose = () => setOpen(false);

  return (
    <NotificationsContext.Provider value={null}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;

export const useNotification = () => useContext(NotificationsContext);
