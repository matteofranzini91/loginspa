import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { Grid, Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { useSignIn } from 'react-auth-kit';
import '../assets/scss/login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

    axios
      .post('userlogin', {
        email,
        password
      })
      .then((res: AxiosResponse) => res.data)
      .then((data) => {
        if (
          signIn({
            token: data.token,
            expiresIn: data.expiresIn,
            tokenType: 'Bearer'
          })
        ) {
          console.log(data);
          navigate('/welcome');
        } else {
          //Throw error
        }
      })
      .catch((error) => console.log(error));
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
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="standard"
              color="secondary"
              type="password"
              value={password}
              error={passwordError}
              fullWidth
              sx={{ mb: 3 }}
              className="login-form-label"
            />
            <Link to="/refresh-password" className="login-form-text no-password link">
              Contraseña olvidada?
            </Link>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              className="login-form-submit-button">
              Login
            </Button>
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
