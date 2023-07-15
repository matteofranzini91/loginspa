import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { Grid, Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';

const Login = () => {
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
        console.log(data);
        navigate('/welcome');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="h2">Login form</Typography>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ mb: 3 }}
              fullWidth
              value={email}
              error={emailError}
              helperText={email === '' ? 'Empty field!' : ' '}
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              error={passwordError}
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button variant="outlined" color="secondary" type="submit">
              Login
            </Button>
          </form>
          <small>
            Need an account? <Link to="/">Register here</Link>
          </small>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
