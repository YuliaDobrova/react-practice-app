import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './components/context';
import Header from './components/header/Header';
import BackToTop from './components/backToTop/BackToTop';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('auth', 'false');
    setIsAuth(false);
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
        <BrowserRouter>
          <Header />
          <div className="AppWrapper">
            <Main />
            {showButton && <BackToTop />}
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
