import React, { useState, useEffect } from 'react';
import { getWeatherForecast } from '../../services/WeatherService';
import Loader from '../shared/loader/Loader';
// import { useEffect } from 'react/cjs/react.production.min';
import './Weather.css';

const defaultWeather = {
  name: 'Kiev',
  weather: [{ main: 'clouds', icon: '04d' }],
  main: { temp: 19.0, feels_like: 17.0 },
};

const Weather = () => {
  const [isloading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(defaultWeather);
  const [dataQuery, setDataQuery] = useState('Kyiv');

  // const dataQuerryArray = ['Kyiv', 'Paris', 'London'];

  // setInterval(() => {
  //   console.log('setInterval')
  //   setTimeout(() => querryCycle0(), 4000);
  //   setTimeout(() => querryCycle1(), 8000);
  //   setTimeout(() => querryCycle2(), 12000);
  //   clearInterval();
  // }, 10000);

  // function querryCycle0() {
  //   setDataQuery(dataQuerryArray[0]);
  // }
  // function querryCycle1() {
  //   setDataQuery(dataQuerryArray[1]);
  // }
  // function querryCycle2() {
  //   setDataQuery(dataQuerryArray[2]);
  // }

  async function getWeatherData() {
    try {
      setIsLoading(true);
      await getWeatherForecast(dataQuery).then(response => {
        console.log('response', response);
        setWeatherData({ ...response });
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  //   const handleSubmit = (e) =>{
  // const inputValue = e.target.value;
  // console.log('inputValue', inputValue)
  // setDataQuery(inputValue)
  //   }

  // console.log('weatherData', weatherData);
  return (
    <>
      {isloading && <Loader />}
      {/* <input onSubmit={handleSubmit}/> */}
      <div id="weather" className="weather">
        <div className="weather__header">
          <div className="weather__main">
            <div className="weather__city-name">{weatherData.name}</div>
            <div className="weather__city-main">
              {weatherData.weather[0].main}
            </div>
          </div>
          <div className="weather__icon">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].main}
            />
          </div>
          <div className="weather__temp">
            {Math.round(weatherData.main.temp)}
          </div>
        </div>
        <div className="weathe r__feels-like">
          Feels like: {weatherData.main.feels_like} °C
        </div>
      </div>
    </>
  );
};

export default Weather;
