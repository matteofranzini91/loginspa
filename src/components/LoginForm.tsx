import { useEffect, memo, useCallback } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/providers/auth/AuthProvider';
import { LoginFormComponentDTO } from 'src/core/models/basic.model';
import FormComponent from './commons/Form/FormComponent';
import { FormComponentStateDTO } from 'src/core/models/form.model';
import { loginFormLayout } from 'src/layout/forms-layouts/login-form.layout';
import CommonButton from './commons/Buttons/CommonButton';
import NoRegisteredUser from './commons/NoRegisteredUser';

const LoginForm = ({ setLoginPanelView }: LoginFormComponentDTO) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.logged) navigate('/welcome');
  }, []);

  const handleFormSubmit = (formValues: FormComponentStateDTO) =>
    auth?.login(formValues.email.value, formValues.password.value);

  const rememberPasswordButton = useCallback(() => {
    setLoginPanelView((oldValue) => ({
      ...oldValue,
      showLoginForm: false,
      showNewPasswordForm: true
    }));
  }, [setLoginPanelView]);

  const noRegisteredUserButton = useCallback(() => {
    setLoginPanelView((oldValue) => ({
      ...oldValue,
      showLoginForm: false,
      showRegisterForm: true
    }));
  }, [setLoginPanelView]);

  return (
    <>
      <Typography variant="h2" className="login-form-title">
        ¡Hola de nuevo!
      </Typography>
      <FormComponent
        formLayout={loginFormLayout}
        submitButtonText="Login"
        loadingSubmitButton={auth?.logging as boolean}
        handleSubmit={handleFormSubmit}>
        <CommonButton text="Contraseña olvidada?" onButtonClick={rememberPasswordButton} />
      </FormComponent>
      <NoRegisteredUser noRegisteredUserButton={noRegisteredUserButton} />
    </>
  );
};

export default memo(LoginForm);