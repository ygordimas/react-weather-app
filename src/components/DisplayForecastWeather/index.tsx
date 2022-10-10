import React, { useEffect } from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { ForecastContainer, StyledContainer } from "./styles";
import { MONTHS } from "../../services/months";

type ForecastDay = {
  dt: number;
  dt_txt: string;
  main: { humidity: number; temp: number };
  pop: number;
  weather: [{}];
};

export function DisplayForecastWeather() {
  const {
    country,
    setCountry,
    zipcode,
    setZipcode,
    fetchWeatherData,
    fetchForecastData,
    lat,
    lon,
    current,
    forecast,
  } = useWeather();

  useEffect(() => {
    if (lat && Object.keys(forecast).length === 0) {
      fetchForecastData();
    }
  }, [lat]);

  return (
    <>
      <ForecastContainer>
        {Object.keys(forecast).length > 0 && (
          <>
            {forecast.map((day: ForecastDay, i) => {
              const forecastMonth = new Date(day["dt"] * 1000).getMonth();
              const forecastDay = new Date(day["dt"] * 1000).getDate();
              if (i % 8 === 0) {
                return (
                  <div key={day["dt"]}>
                    <p>
                      {"Forecast for " +
                        forecastDay +
                        "/" +
                        MONTHS[forecastMonth]}
                    </p>
                    <p>humidity: {day.main.humidity}</p>
                    <p>temperature: {day.main.temp}</p>
                    <p>chance of rain: {day.pop * 100}%</p>
                  </div>
                );
              }
            })}
          </>
        )}
      </ForecastContainer>
    </>
  );
}
