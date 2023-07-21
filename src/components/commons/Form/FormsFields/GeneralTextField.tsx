import { memo } from 'react';
import { FormFieldsDTO } from 'src/core/models/form.model';
import { TextField } from '@mui/material';

const GeneralTextField = ({ value, label, name, onChange }: FormFieldsDTO) => (
  <div className="general-field-container">
    <TextField
      label={label}
      onChange={onChange}
      required
      variant="standard"
      color="secondary"
      type="text"
      sx={{ mb: 3 }}
      fullWidth
      value={value}
      className="login-form-label"
      name={name}
    />
  </div>
);

export default memo(
  GeneralTextField,
  (prevProps: FormFieldsDTO, nextProps: FormFieldsDTO) => prevProps.value === nextProps.value
);
