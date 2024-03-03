import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from './components/context';
import Header from './components/header/Header';
import BackToTop from './components/backToTop/BackToTop';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
// import { ThemeProvider } from '@mui/material';
// import { createTheme } from '@mui/material/styles';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const theme = createTheme({
  //     palette: {
  //       primary: {
  //         main: '#61dafb',
  //       },
  //       secondary: {
  //         main: '#ffffff',
  //       },
  //     },
  //     typography: {
  //       fontFamily: 'Open Sans',
  //     },

  //   });

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth('true');
      localStorage.setItem('auth', 'true');
    }
    setIsLoading(false);
  }, []);

  // TO TOP BUTTON
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <Header />
          <div className="AppWrapper">
            <Main />
            {showButton && <BackToTop />}
          </div>
          <Footer />
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
