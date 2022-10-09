import { useEffect, useState } from "react";
import { useWeather } from "../../hooks/useWeatherContext";

export default function DisplayCurrentWeather() {
  const { fetchWeatherData, fetchForecastData, lat, current, forecast } =
    useWeather();

  useEffect(() => {
    if (lat && Object.keys(current).length === 0) {
      fetchWeatherData();
    }
  }, [lat]);

  return (
    <>
      {Object.hasOwn(current, "weather") && (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>checking the weather for {current.name}</p>
          <p>Weather is {current.weather[0].main}</p>
          <p>{current.weather[0].description}</p>
          <p>temperature {parseInt(current.main.temp)}ºC</p>
          <p>humidity {parseInt(current.main.humidity)}%</p>
          {current.main.temp === current.main.temp_max &&
          current.main.temp === current.main.temp_min ? null : (
            <>
              <p>minimum temperature {current.main.temp_min}</p>
              <p>maximum temperature {current.main.temp_max}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
