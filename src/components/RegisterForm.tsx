import { memo } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { LoginFormComponentDTO } from 'src/core/models/basic.model';

const RegisterForm = ({ setLoginPanelView }: LoginFormComponentDTO) => (
  <>
    <Typography variant="h2" className="login-form-title">
      Registrate
    </Typography>
    <form autoComplete="off" className="login-form">
      <Button
        className="login-form-text no-password link"
        onClick={() => {
          setLoginPanelView((oldValue) => ({
            ...oldValue,
            showLoginForm: true,
            showRegisterForm: false
          }));
        }}>
        atras
      </Button>
    </form>
  </>
);

export default memo(RegisterForm);
