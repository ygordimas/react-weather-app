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
          {forecast.forecast.forecastday.map((day, i) => {
            return (
              <WeatherCard secondary key={day.date_epoch}>
                <header>
                  <h1>
                    Forecast for{" "}
                    {i == 0
                      ? `today`
                      : `${day.date.slice(8)} of ${
                          MONTHS[Number(day.date.slice(5, 7)) - 1]
                        }`}
                  </h1>
                  <img src={day.day.condition.icon} alt="" />
                  <h2>{day.day.condition.text}</h2>
                </header>

                <section>
                  <div className="spread">
                    <p>avg. temperature</p>
                    <div></div>
                    <p>{day.day.avgtemp_c}ºC</p>
                  </div>
                  <div className="spread">
                    <p>max. temperature</p>
                    <div></div>
                    <p>{day.day.maxtemp_c}ºC</p>
                  </div>
                  <div className="spread">
                    <p>min. temperature</p>
                    <div></div>
                    <p>{day.day.mintemp_c}ºC</p>
                  </div>
                  <div className="spread">
                    <p>avg. humidity</p>
                    <div></div>
                    <p>{day.day.avghumidity}%</p>
                  </div>
                  <div className="spread">
                    <p>chance of rain</p>
                    <div></div>
                    <p>{day.day.daily_chance_of_rain}%</p>
                  </div>
                  <div className="spread">
                    <p>total precipitation</p>
                    <div></div>
                    <p>{day.day.totalprecip_mm}mm</p>
                  </div>
                  <div className="spread">
                    <p>max. wind</p>
                    <div></div>
                    <p>{day.day.maxwind_kph.toFixed()}km/h</p>
                  </div>
                </section>
              </WeatherCard>
            );
          })}
        </>
      )}
    </>
  );
}
