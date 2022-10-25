import { useEffect, useState } from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { CurrentWeatherContainer } from "./styles";
import { WeatherCard } from "../WeatherCard";

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
        <WeatherCard primary>
          <header>
            <h1>Current weather</h1>
            <img src={current.condition.icon} alt="" />
            <h2>{current.condition.text}</h2>
            {/* <p>{current.weather[0].description}</p> */}
          </header>

          <section>
            <div className="spread">
              <p>temperature</p>
              <div></div>
              <p>{current.temp_c.toFixed()}ºC</p>
            </div>
            <div className="spread">
              <p>feels like</p>
              <div></div>
              <p>{current.feelslike_c.toFixed()}ºC</p>
            </div>
            <div className="spread">
              <p>cloud coverage</p>
              <div></div>
              <p>{current.cloud}%</p>
            </div>
            <div className="spread">
              <p>precipitation</p>
              <div></div>
              <p>{current.precip_mm}mm</p>
            </div>

            <div className="spread">
              <p>humidity</p>
              <div></div>
              <p>{current.humidity}%</p>
            </div>

            {/* {current.main.temp === current.main.temp_max &&
              current.main.temp === current.main.temp_min ? null : (
                <>
                  <div className="spread">
                    <p>min. temperature</p>
                    <div></div>
                    <p>{current.main.temp_min.toFixed()}ºC</p>
                  </div>
                  <div className="spread">
                    <p>max. temperature</p>
                    <div></div>
                    <p>{current.main.temp_max.toFixed()}ºC</p>
                  </div>
                </>
              )} */}
            <div className="spread">
              <p>wind</p>
              <div></div>
              <p>{current.wind_kph.toFixed()}km/h</p>
            </div>
          </section>
        </WeatherCard>
      </>
    );
  };

  return <>{Object.keys(current).length > 0 && <CurrentWeatherComponent />}</>;
}
