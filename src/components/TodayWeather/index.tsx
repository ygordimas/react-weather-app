import React from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { MONTHS } from "../../services/months";
import { WeatherCard } from "../WeatherCard";
import { TodayWeatherCard } from "./styles";

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

export function TodayWeather() {
  const { forecast } = useWeather();
  return (
    <>
      {Object.keys(forecast).length > 0 && (
        <>
          {forecast.map((day: ForecastDay, i) => {
            const forecastMonth = new Date(day["dt"] * 1000).getMonth();
            const forecastDayNumber = new Date(day["dt"] * 1000).getDate();
            if (i === 0) {
              return (
                <WeatherCard key={day["dt"]}>
                  <header>
                    <h1>Forecast for today</h1>
                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt=""
                    />
                    <h2>{day.weather[0].main}</h2>
                    <p>{day.weather[0].description}</p>
                  </header>

                  <section>
                    <div className="spread">
                      <p>avg. temperature</p>
                      <div></div>
                      <p>{day.main.temp.toFixed()}ºC</p>
                    </div>
                    <div className="spread">
                      <p>avg. humidity</p>
                      <div></div>
                      <p>{day.main.humidity}%</p>
                    </div>
                    <div className="spread">
                      <p>chance of rain</p>
                      <div></div>
                      <p>{day.pop * 100}%</p>
                    </div>
                    <div className="spread">
                      <p>avg. wind</p>
                      <div></div>
                      <p>{(day.wind.speed * 3.6).toFixed()}km/h</p>
                    </div>
                  </section>
                </WeatherCard>
              );
            }
          })}
        </>
      )}
    </>
  );
}
