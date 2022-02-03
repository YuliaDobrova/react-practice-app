import React, { useContext } from 'react';
import { AuthContext } from '../components/context';
import MyButton from '../components/shared/button/MyButton';
import MyInput from '../components/shared/input/MyInput';

const LoginPage = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  // useEffect(() => {
  //   if (localStorage.getItem('auth')) {
  //     setIsAuth('true');
  //     localStorage.setItem('auth', 'true');
  //   }
  // }, []);

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default LoginPage;
