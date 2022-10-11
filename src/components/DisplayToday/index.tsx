import React from "react";
import CurrentWeather from "../CurrentWeather";
import { TodayWeather } from "../TodayWeather";
import { DisplayTodayContainer } from "./styles";

export function DisplayToday() {
  return (
    <DisplayTodayContainer>
      <CurrentWeather />
      <TodayWeather />
    </DisplayTodayContainer>
  );
}
