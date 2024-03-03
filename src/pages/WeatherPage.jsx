import React from 'react';
import Weather from '../components/weather/Weather';

const WeatherPage = () => {
  return (
    <>
      <p style={{ textAlign: 'center', marginBottom: 20, fontSize: 30 }}>
        <b>Weather widget</b>
      </p>
      <Weather />
    </>
  );
};

export default WeatherPage;
