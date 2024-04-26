import React, { useContext } from 'react';
import { AuthContext } from '../components/context';
import MyButton from '../components/shared/button/MyButton';
import MyInput from '../components/shared/input/MyInput';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    navigate('/');
  };

  return (
    <div>
      <h1 style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>
        Login Page
      </h1>
      <p style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>
        This page was created to test Authorization & Private routes. <br />{' '}
        Enter whatever you want in LOGIN and PASSWORD fields and get the access
        to private routes and API widgets:{' '}
        <strong>
          Weather Widget, Currency Converter, Image Search, Posts API.
        </strong>
      </p>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MyButton>Enter</MyButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
