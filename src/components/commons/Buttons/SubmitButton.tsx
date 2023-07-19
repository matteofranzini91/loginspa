import { memo } from 'react';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { SubmitButtonDTO } from 'src/core/models/buttons.model';

const SubmitButton = ({ text, loading }: SubmitButtonDTO) => (
  <div className="submit-button-container">
    {loading ? (
      <CircularProgress color="secondary" />
    ) : (
      <Button
        variant="outlined"
        color="secondary"
        type="submit"
        className="login-form-submit-button">
        {text}
      </Button>
    )}
  </div>
);

export default memo(SubmitButton);
