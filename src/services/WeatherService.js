import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherForecast = async (query = "Kyiv") => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${query}&appid=${WEATHER_API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
