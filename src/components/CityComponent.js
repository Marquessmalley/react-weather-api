import React from "react";
import "../styles/cityComponent.css";
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img className="weatherLogo" src="/svg/perfect-day.svg"></img>
      <span className="chooseCitySpan">Find your city!</span>
      <form className="searchForm" onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            updateCity(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default CityComponent;
