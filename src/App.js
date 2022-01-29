import React, { useEffect, useState } from 'react';

import Header from './components/header/Header';

import BackToTop from './components/backToTop/BackToTop';
import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
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
      <Header />
      <div className="AppWrapper">
        <Main />
        {showButton && <BackToTop />}
      </div>
      <Footer />
    </>
  );
}

export default App;
