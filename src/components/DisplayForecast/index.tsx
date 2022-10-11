import React from "react";
import { ForecastWeather } from "../ForecastWeather";
import { DisplayForecastContainer } from "./styles";

export function DisplayForecast() {
  return (
    <>
      <DisplayForecastContainer>
        <ForecastWeather />
      </DisplayForecastContainer>
    </>
  );
}
