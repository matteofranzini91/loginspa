import { memo, useCallback, useState } from 'react';
import { Typography } from '@mui/material';
import { LoginFormComponentDTO } from 'src/core/models/basic.model';
import FormComponent from './commons/Form/FormComponent';
import CommonButton from './commons/Buttons/CommonButton';
import LoginPageFormFooter from './commons/LoginPageFormFooter';
import { FormComponentStateDTO } from 'src/core/models/form.model';
import { registerFormLayout } from 'src/layout/forms-layouts/register-form.layout';
import { registerUserService } from 'src/core/services/user/user.service';
import { useNotification } from 'src/providers/notifications/NotificationsProvider';

const RegisterForm = ({ setLoginPanelView }: LoginFormComponentDTO) => {
  const notification = useNotification();
  const [loadingFormButton, setLoadingFormButton] = useState(false);

  const goToLoginForm = () =>
    setLoginPanelView((oldValue) => ({
      ...oldValue,
      showRegisterForm: false,
      showLoginForm: true
    }));

  const loginButton = useCallback(() => {
    goToLoginForm();
  }, [setLoginPanelView]);

  const handleFormSubmit = (formValues: FormComponentStateDTO) => {
    setLoadingFormButton(true);
    registerUserService(formValues)
      .then(() => {
        notification?.setNotification({
          open: true,
          severity: 'success',
          message: 'Usuario registrado con éxito'
        });
        setLoadingFormButton(false);
        goToLoginForm();
      })
      .catch(() => setLoadingFormButton(false));
  };

  const rememberPasswordButton = useCallback(() => {
    setLoginPanelView((oldValue) => ({
      ...oldValue,
      showRegisterForm: false,
      showNewPasswordForm: true
    }));
  }, [setLoginPanelView]);

  return (
    <>
      <Typography variant="h2" className="login-form-title">
        Registrarse
      </Typography>
      <FormComponent
        formLayout={registerFormLayout}
        submitButtonText="Registrarse"
        loadingSubmitButton={loadingFormButton}
        handleSubmit={handleFormSubmit}
        classname="login-form">
        <CommonButton
          text="¿Ya tienes un perfil registrado y has olvidado tu constraseña?"
          onButtonClick={rememberPasswordButton}
        />
      </FormComponent>
      <LoginPageFormFooter text="¿Ya tienes un perfil registrado?" actionButton={loginButton} />
    </>
  );
};

export default memo(RegisterForm);
