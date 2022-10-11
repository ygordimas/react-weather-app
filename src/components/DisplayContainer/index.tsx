import React from "react";
import DisplayCurrentWeather from "../CurrentWeather";
import { DisplayForecast } from "../DisplayForecast";
import { DisplayToday } from "../DisplayToday";
import { DisplayGridContainer } from "./styles";

export function DisplayContainer() {
  return (
    <>
      <DisplayGridContainer>
        <DisplayToday />
        <DisplayForecast />
      </DisplayGridContainer>
    </>
  );
}
