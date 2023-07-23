import { useState, useRef, useEffect } from 'react';
import { Grid } from '@mui/material';
import '../assets/scss/login.scss';
import Slide from '@mui/material/Slide';
import LoginForm from 'src/components/LoginForm';
import NewPasswordForm from 'src/components/NewPasswordForm';
import { TypeWithKey } from 'src/core/models/basic.model';
import RegisterForm from 'src/components/RegisterForm';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/providers/auth/AuthProvider';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [loginPanelView, setLoginPanelView] = useState<TypeWithKey<boolean>>({
    showLoginForm: true,
    showNewPasswordForm: false,
    showRegisterForm: false
  });

  useEffect(() => {
    if (auth?.logged) navigate('/welcome');
  }, []);

  return (
    <Grid container className="login-form-grid-container">
      <Grid item xs={4} className="login-form-grid-item" ref={containerRef}>
        <div className="slides-container">
          <Slide
            direction="down"
            in={loginPanelView.showLoginForm}
            container={containerRef.current}>
            <div className="slide login-form-grid">
              <LoginForm setLoginPanelView={setLoginPanelView} />
            </div>
          </Slide>
          <Slide
            direction="up"
            in={loginPanelView.showNewPasswordForm}
            container={containerRef.current}>
            <div className="slide password-form-grid">
              <NewPasswordForm setLoginPanelView={setLoginPanelView} />
            </div>
          </Slide>
          <Slide
            direction="right"
            in={loginPanelView.showRegisterForm}
            container={containerRef.current}>
            <div className="slide password-form-grid">
              <RegisterForm setLoginPanelView={setLoginPanelView} />
            </div>
          </Slide>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
