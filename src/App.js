import axios from "axios";
import React, { useState } from "react";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";
import "./styles/app.css";

const API_KEY = "5dc6d56fb208420f013d68d55d33a709";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <span className="appLabel">Marques Weather App</span>

      {/* BODY */}

      {/* {weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <div className="city-component">
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        </div>
      )} */}
      <div className="city-component">
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      </div>
      <div className="weather-component">
        <WeatherComponent weather={weather} city={city} />
      </div>
    </div>
  );
}

export default App;
