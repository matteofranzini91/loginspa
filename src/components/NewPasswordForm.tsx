import { useState, memo, useCallback } from 'react';
import { Typography } from '@mui/material';
import { LoginFormComponentDTO } from 'src/core/models/basic.model';
import LoginPageFormFooter from './commons/LoginPageFormFooter';
import FormComponent from './commons/Form/FormComponent';
import CommonButton from './commons/Buttons/CommonButton';
import { FormComponentStateDTO } from 'src/core/models/form.model';
import { newPasswordFormLayout } from 'src/layout/forms-layouts/new-password-form.layout';
import { resetPassqordService } from 'src/core/services/password/password.service';
import { useNotification } from 'src/providers/notifications/NotificationsProvider';

const NewPasswordForm = ({ setLoginPanelView }: LoginFormComponentDTO) => {
  const notification = useNotification();
  const [loadingFormButton, setLoadingFormButton] = useState(false);

  const goToLoginForm = () =>
    setLoginPanelView((oldValue) => ({
      ...oldValue,
      showLoginForm: true,
      showNewPasswordForm: false
    }));

  const loginButton = useCallback(() => {
    goToLoginForm();
  }, [setLoginPanelView]);

  const noRegisteredUserButton = useCallback(() => {
    setLoginPanelView((oldValue) => ({
      ...oldValue,
      showNewPasswordForm: false,
      showRegisterForm: true
    }));
  }, [setLoginPanelView]);

  const handleFormSubmit = (formValues: FormComponentStateDTO) => {
    setLoadingFormButton(true);
    resetPassqordService(formValues.email.value as string)
      .then(() => {
        notification?.setNotification({
          open: true,
          severity: 'success',
          message: 'Correo enviado con éxito'
        });
        setLoadingFormButton(false);
        goToLoginForm();
      })
      .catch(() => setLoadingFormButton(false));
  };

  return (
    <>
      <Typography variant="h2" className="login-form-title">
        Recuperar contraseña
      </Typography>
      <Typography variant="subtitle2" className="login-form-subtitle">
        Para recuperar tu contraseña inserta aquí tu cuenta de correo registrada. Si es correcta
        recibirás un correo.
      </Typography>
      <FormComponent
        formLayout={newPasswordFormLayout}
        submitButtonText="Recuperar contraseña"
        loadingSubmitButton={loadingFormButton}
        handleSubmit={handleFormSubmit}>
        <CommonButton text="Realizar acceso" onButtonClick={loginButton} />
      </FormComponent>
      <LoginPageFormFooter
        text="¿No tienes un perfil registrado?"
        actionButton={noRegisteredUserButton}
      />
    </>
  );
};

export default memo(NewPasswordForm);
