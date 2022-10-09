import React, { useEffect } from "react";
import { useWeather } from "../../hooks/useWeatherContext";

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

  return <div>index</div>;
}
