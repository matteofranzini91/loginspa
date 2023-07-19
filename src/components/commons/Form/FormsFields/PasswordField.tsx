import { useState, memo } from 'react';
import { TextField } from '@mui/material';
import { FormFieldsDTO } from 'src/core/models/form.model';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Tooltip from '@mui/material/Tooltip';
import LockIcon from '@mui/icons-material/Lock';

const PasswordField = ({ value, label, name, onChange }: FormFieldsDTO) => {
  const [passwordLabelType, setPasswordLabelType] = useState<string>('password');

  const showPassword = () => {
    passwordLabelType === 'password'
      ? setPasswordLabelType('text')
      : setPasswordLabelType('password');
  };

  return (
    <div className="password-label-container">
      <LockIcon className="form-field-icon" />
      <TextField
        label={label}
        onChange={onChange}
        required
        variant="standard"
        color="secondary"
        type={passwordLabelType}
        value={value}
        fullWidth
        sx={{ mb: 3 }}
        className="login-form-label password-label"
        name={name}
      />
      {passwordLabelType === 'password' ? (
        <>
          <Tooltip title="Mostrar contraseña">
            <VisibilityIcon className="password-icon" onClick={showPassword} />
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Ocultar contraseña">
          <VisibilityOffIcon className="password-icon" onClick={showPassword} />
        </Tooltip>
      )}
    </div>
  );
};

export default memo(
  PasswordField,
  (prevProps: FormFieldsDTO, nextProps: FormFieldsDTO) => prevProps.value === nextProps.value
);
