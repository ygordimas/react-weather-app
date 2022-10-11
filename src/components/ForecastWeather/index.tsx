import React, { useEffect, useState } from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { ForecastWeatherCard } from "./styles";
import { MONTHS } from "../../services/months";
import { WeatherCard } from "../WeatherCard";

type ForecastDay = {
  dt: number;
  dt_txt: string;
  main: { humidity: number; temp: number };
  pop: number;
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
};

export function ForecastWeather() {
  const { forecast } = useWeather();

  return (
    <>
      {Object.keys(forecast).length > 0 && (
        <>
          {forecast.map((day: ForecastDay, i) => {
            const forecastMonth = new Date(day["dt"] * 1000).getMonth();
            const forecastDayNumber = new Date(day["dt"] * 1000).getDate();
            if (i > 1 && i % 8 === 0) {
              return (
                <WeatherCard key={day["dt"]}>
                  <p>
                    {"Forecast for " +
                      forecastDayNumber +
                      "/" +
                      MONTHS[forecastMonth]}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <p>{day.weather[0].main}</p>
                  <p>{day.weather[0].description}</p>
                  <p>humidity: {day.main.humidity}</p>
                  <p>temperature: {day.main.temp}ºC</p>
                  <p>chance of rain: {day.pop * 100}%</p>
                  <p>wind: {(day.wind.speed * 3.6).toFixed()}km/h</p>
                </WeatherCard>
              );
            }
          })}
        </>
      )}
    </>
  );
}
