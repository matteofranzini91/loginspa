import { Typography } from '@mui/material';
import CommonButton from './Buttons/CommonButton';

type NoRegisteredUserDTO = {
  noRegisteredUserButton: () => void;
};

const NoRegisteredUser = ({ noRegisteredUserButton }: NoRegisteredUserDTO) => (
  <Typography paragraph={true} className="login-form-text no-user">
    ¿No tienes un perfil registrado?
    <CommonButton text="Pincha aquí" onButtonClick={noRegisteredUserButton} />
  </Typography>
);

export default NoRegisteredUser;
