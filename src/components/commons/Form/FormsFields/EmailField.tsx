import { memo } from 'react';
import { FormFieldsDTO } from 'src/core/models/form.model';
import { TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const EmailField = ({ value, label, name, onChange }: FormFieldsDTO) => (
  <div className="email-field-container">
    <EmailIcon className="form-field-icon" />
    <TextField
      label={label}
      onChange={onChange}
      required
      variant="standard"
      color="secondary"
      type="email"
      sx={{ mb: 3 }}
      fullWidth
      value={value}
      className="login-form-label"
      name={name}
    />
  </div>
);

export default memo(
  EmailField,
  (prevProps: FormFieldsDTO, nextProps: FormFieldsDTO) => prevProps.value === nextProps.value
);
