import React from 'react';
import Hero from '../components/hero/Hero';
import Weather from '../components/weather/Weather';

// import Grid from '../components/grid/Grid';

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
        <p style={{ textAlign: 'center' }}>
          React updates and renders just the right components when data changes.
        </p>
        <hr style={{ margin: 15 }} />
        <p style={{ textAlign: 'center' }}>
          The best way to practice and improve your React skills is creating an
          application on your own.
        </p>
        <hr style={{ margin: 15 }} />
        {/* <Grid /> */}
        <Weather/>
      </div>
    </>
  );
};

export default HomePage;
