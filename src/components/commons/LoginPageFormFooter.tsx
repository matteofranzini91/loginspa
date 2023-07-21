import { Typography } from '@mui/material';
import CommonButton from './Buttons/CommonButton';

type NoRegisteredUserDTO = {
  text: string;
  actionButton: () => void;
};

const LoginPageFormFooter = ({ text, actionButton }: NoRegisteredUserDTO) => (
  <Typography paragraph={true} className="login-form-text no-user">
    {text}
    <CommonButton text="Pincha aquí" onButtonClick={actionButton} />
  </Typography>
);

export default LoginPageFormFooter;
