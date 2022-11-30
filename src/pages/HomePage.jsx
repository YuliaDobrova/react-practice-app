import React from 'react';
import EarthAnimation from '../components/earthAnimation/EarthAnimation';
import Hero from '../components/hero/Hero';
import MyButton from '../components/shared/button/MyButton';
import Title from '../components/title/Title';
import Weather from '../components/weather/Weather';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div style={{ paddingBottom: 70 }}>
        <Title />
        <p style={{ textAlign: 'center' }}>
          A JavaScript library for building user interfaces.
        </p>
        <p style={{ textAlign: 'center' }}>
          It is Declarative & Component-Based.
        </p>
        <hr style={{ margin: 15 }} />
        <p style={{ textAlign: 'center' }}>
          The best way to practice and improve your React skills is creating an
          application on your own.
        </p>
        <hr style={{ margin: 15 }} />
        <div style={{ display:"flex", justifyContent:"center" }}>
          <MyButton>
            <p style={{ textAlign: 'center' }}>
              <a
                href="https://yuliadobrova.github.io/my-resume/"
                target="_blank"
                style={{ color: '#61dafb' }}
              >
                → <b>Check out my CV</b>
              </a>
            </p>
          </MyButton>
        </div>
        <hr style={{ margin: 15 }} />
        <EarthAnimation />
      </div>
    </>
  );
};

export default HomePage;
