import React from "react";
import "../styles/weatherComponent.css";

export const WeatherInfoIcons = {
  sunset: "/svg/temp.svg",
  sunrise: "/svg/temp.svg",
  humidity: "/svg/humidity.svg",
  wind: "/svg/wind.svg",
  pressure: "/svg/pressure.svg",
};

const WeatherInfoCompoenent = (props) => {
  const { name, value } = props;
  return (
    <div className="infoContainer">
      <img className="infoIcon" src={WeatherInfoIcons[name]}></img>
      <span className="infoLabel">
        {value} <span>{name}</span>
      </span>
    </div>
  );
};
const WeatherComponent = (props) => {
  const { weather } = props;
  // day or night
  const isDay = weather?.weather[0].icon?.includes("d");
  // time stamp
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <div className="weatherCondition">
        <span className="condition">
          {`${Math.floor((weather?.main?.temp - 273) * 1.8 + 32)}°F`}
          <span className="conditionType">{`| ${weather?.weather[0].description}`}</span>
        </span>
        <img className="weatherLogo" src="/svg/perfect-day.svg"></img>
      </div>

      <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>
      <span className="weatherInfoLabel">Weather Info</span>

      <div className="weatherInfoContainer">
        <WeatherInfoCompoenent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoCompoenent
          name="humidity"
          value={weather?.main?.humidity}
        />
        <WeatherInfoCompoenent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoCompoenent
          name="pressure"
          value={weather?.main?.pressure}
        />
      </div>
    </>
  );
};

export default WeatherComponent;
