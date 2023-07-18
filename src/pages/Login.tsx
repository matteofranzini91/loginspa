import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import '../assets/scss/login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/providers/auth/AuthProvider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //password state
  const [passwordLabelType, setPasswordLabelType] = useState<string>('password');

  const showPassword = () => {
    passwordLabelType === 'password'
      ? setPasswordLabelType('text')
      : setPasswordLabelType('password');
  };

  useEffect(() => {
    if (auth?.logged) navigate('/welcome');
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == '') {
      setEmailError(true);
    }
    if (password == '') {
      setPasswordError(true);
    }

    auth?.login(email, password);
  };

  return (
    <>
      <Grid container className="login-form-grid-container">
        <Grid item xs={4} className="login-form-grid-item">
          <Typography variant="h2" className="login-form-title">
            ¡Hola de nuevo!
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit} className="login-form">
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="standard"
              color="secondary"
              type="email"
              sx={{ mb: 3 }}
              fullWidth
              value={email}
              error={emailError}
              className="login-form-label"
            />
            <div className="password-label-container">
              <TextField
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="standard"
                color="secondary"
                type={passwordLabelType}
                value={password}
                error={passwordError}
                fullWidth
                sx={{ mb: 3 }}
                className="login-form-label password-label"
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

            <Link to="/refresh-password" className="login-form-text no-password link">
              Contraseña olvidada?
            </Link>
            <div className="submit-button-container">
              {auth?.logging ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button
                  variant="outlined"
                  color="secondary"
                  type="submit"
                  className="login-form-submit-button">
                  Login
                </Button>
              )}
            </div>
          </form>
          <Typography paragraph={true} className="login-form-text no-user">
            ¿No tienes un perfil registrado?
            <Link to="/register-user" className="login-form-text link">
              Pincha aquí
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
