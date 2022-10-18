import React from "react";
import { useWeather } from "../../hooks/useWeatherContext";
import { MONTHS } from "../../services/months";
import { WeatherCard } from "../WeatherCard";
import { TodayWeatherCard } from "./styles";

type ForecastDay = {
  date_epoch: number;
  avghumidity: number;
  avgtemp_c: number;
  condition: {
    icon: string;
    text: string;
  };
  daily_chance_of_rain: number;
  maxtemp_c: number;
  mintemp_c: number;
  totalprecip_mm: number;
  maxwind_kph: number;
};

export function TodayWeather() {
  const { forecast } = useWeather();
  return (
    <>
      {Object.keys(forecast).length > 0 && (
        <>
          {forecast.forecast.forecastday.map((day, i) => {
            // const forecastMonth = new Date(day["dt"] * 1000).getMonth();
            // const forecastDayNumber = new Date(day["dt"] * 1000).getDate();
            if (i === 0) {
              return (
                <WeatherCard key={day.date_epoch}>
                  <header>
                    <h1>Forecast for today</h1>
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
            }
          })}
        </>
      )}
    </>
  );
}
