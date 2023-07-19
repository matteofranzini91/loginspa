import { Button } from '@mui/material';
import { CommonButtonDTO } from 'src/core/models/buttons.model';

const CommonButton = ({ text, onButtonClick }: CommonButtonDTO) => (
  <Button onClick={onButtonClick} className="login-form-text link">
    {text}
  </Button>
);

export default CommonButton;
