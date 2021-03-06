import React from 'react';
import EarthAnimation from '../components/earthAnimation/EarthAnimation';
import Hero from '../components/hero/Hero';
import Weather from '../components/weather/Weather';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div>
        <h1 style={{ textAlign: 'center' }}> React</h1>
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
        <p style={{ textAlign: 'center', marginBottom: 20 }}>
          <b>Weather widget of my native city</b>
        </p>
        <Weather />
        <EarthAnimation />
      </div>
    </>
  );
};

export default HomePage;
