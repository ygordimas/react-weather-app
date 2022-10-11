import { useEffect, useState } from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { CurrentWeatherContainer } from "./styles";

type CurrentData = {
  name: string;
  weather: [{ description: string; icon: string; main: string }];
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: { speed: number };
};

export default function CurrentWeather() {
  const { current } = useWeather();

  const CurrentWeatherComponent = () => {
    return (
      <>
        <CurrentWeatherContainer>
          <p>checking the weather for {current.name}</p>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>Weather is {current.weather[0].main}</p>
          <p>{current.weather[0].description}</p>
          <p>temperature {current.main.temp.toFixed()}ºC</p>
          <p>feels like {current.main.feels_like.toFixed()}ºC</p>
          <p>humidity {current.main.humidity.toFixed()}%</p>
          {/* 
          minimum and maximum temperatures are only available for large cities
           */}
          {current.main.temp === current.main.temp_max &&
          current.main.temp === current.main.temp_min ? null : (
            <>
              <p>minimum temperature {current.main.temp_min}</p>
              <p>maximum temperature {current.main.temp_max}</p>
            </>
          )}
          <p>wind: {(current.wind.speed * 3.6).toFixed()}km/h</p>
        </CurrentWeatherContainer>
      </>
    );
  };

  return (
    <>{Object.hasOwn(current, "weather") && <CurrentWeatherComponent />}</>
  );
}
