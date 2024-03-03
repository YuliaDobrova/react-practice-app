import React, { useState, useEffect } from 'react';
import { getWeatherForecast } from '../../services/WeatherService';
import Loader from '../shared/loader/Loader';
import './Weather.css';

const defaultWeather = {
  name: 'Kyiv',
  weather: [{ main: 'Clouds', icon: '04d' }],
  main: { temp: 19.0, feels_like: 17.0 },
};

const Weather = () => {
  const [isloading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(defaultWeather);
  const [dataQuery, setDataQuery] = useState('Vancouver');

  async function getWeatherData() {
    try {
      setIsLoading(true);
      await getWeatherForecast(dataQuery).then(response => {
        setWeatherData({ ...response });
      });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      {isloading && <Loader />}
      <div id="weather" className="weather">
        <div className="weather__city-name">{weatherData.name}</div>
        <div className="weather__header">
          <div className="weather__main">
            <div className="weather__city-main">
              {weatherData.weather[0].main}
            </div>
          </div>
          <div className="weather__icon">
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].main}
            />
          </div>
          <div className="weather__temp">
            {Math.round(weatherData.main.temp)}
          </div>
        </div>
        <div className="weathe r__feels-like">
          Feels like: {weatherData?.main.feels_like} °C
        </div>
        <div className="weathe r__feels-like">
          Humidity: {weatherData?.main?.humidity} %
        </div>
        <div className="weathe r__feels-like">
          Wind speed: {weatherData?.wind?.speed} m/s
        </div>
        <div className="weathe r__feels-like">
          Max temp: {weatherData?.main.temp_max} °C
        </div>
        <div className="weathe r__feels-like">
          Min temp: {weatherData?.main.temp_min} °C
        </div>
      </div>
    </>
  );
};

export default Weather;
