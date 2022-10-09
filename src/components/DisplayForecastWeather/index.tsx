import React, { useEffect } from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { StyledContainer } from "./styles";

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
      {Object.keys(forecast).length > 0 && (
        <div>
          {forecast.map((day, i) => {
            if (i % 8 === 0) {
              return <div key={day["dt"]}>{day["dt_txt"]}</div>;
            }
          })}
          ;
        </div>
      )}
    </>
  );
}
