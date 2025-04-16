import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const AuthPage = ({ type = 'login' }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/papers');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-page">
      {type === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPage;
