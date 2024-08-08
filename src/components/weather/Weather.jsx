import React, { useState, useEffect } from 'react';
import { getWeatherForecast } from '../../services/WeatherService';
import Loader from '../shared/loader/Loader';
import MyInput from '../shared/input/MyInput';
import MyButton from '../shared/button/MyButton';
import './Weather.css';

const defaultWeather = {
  name: 'Vancouver',
  weather: [{ main: 'Clouds', icon: '04d' }],
  main: {
    feels_like: 28.26,
    grnd_level: 1005,
    humidity: 61,
    pressure: 1013,
    sea_level: 1013,
    temp: 27.08,
    temp_max: 30.16,
    temp_min: 23.46,
  },
};

const Weather = () => {
  const [isloading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(defaultWeather);
  const [dataQuery, setDataQuery] = useState('');

  async function getWeatherData() {
    try {
      setIsLoading(true);
      await getWeatherForecast(dataQuery).then(response => {
        setWeatherData({ ...response });
        console.log('response', response);
      });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  const onInputChange = e => {
    setDataQuery(e.target.value);
  };
  const onInputSubmit = () => {
    getWeatherData();
  };

  return (
    <>
      {isloading && <Loader />}
      <div className="weatherInputWrapper">
        <MyInput
          value={dataQuery}
          placeholder="Enter city name"
          onChange={onInputChange}
        />
        <MyButton onClick={onInputSubmit}>Get weather forecast</MyButton>
      </div>

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
