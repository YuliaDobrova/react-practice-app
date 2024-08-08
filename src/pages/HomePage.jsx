import React, { useContext } from 'react';
import EarthAnimation from '../components/earthAnimation/EarthAnimation';
import Hero from '../components/hero/Hero';
import Title from '../components/title/Title';
import ShiningBtn from '../components/shiningBtn/ShiningBtn';
import TypingText from '../components/typingText/TypingText';
import { AuthContext } from '../components/context';

const HomePage = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Hero />
      <div style={{ paddingBottom: 70 }}>
        {isAuth ? (
          <>
            <p
              style={{
                paddingLeft: 50,
                paddingRight: 50,
                paddingBottom: 50,
                textAlign: 'center',
              }}
            >
              <b>
                Now when you have just successfully passed authorization, you
                can explore the API widgets. Just switch the page in nagivation
                panel.
              </b>
            </p>
            <p
              style={{
                color: '#61dafb',
                textAlign: 'center',
              }}
            >
              Remember: you can always log out from the private routes to see
              the public routes.
            </p>
            <br />
            <p
              style={{
                textAlign: 'center',
                paddingBottom: 30,
              }}
            >
              The code to this App in on my{' '}
              <a
                href="https://github.com/YuliaDobrova/react-practice-app"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'underline', color: '#61dafb' }}
              >
                GitHub
              </a>
            </p>
          </>
        ) : (
          <>
            <Title />
            <p style={{ textAlign: 'center', marginTop: 10 }}>
              is a Declarative & Component-Based library that creates magic!
            </p>
            <p style={{ textAlign: 'center' }}>
              The best way to practice and improve React skills is to create an
              application on your own.
            </p>
            <TypingText />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              <ShiningBtn />
            </div>
          </>
        )}

        <EarthAnimation />
      </div>
    </>
  );
};

export default HomePage;
