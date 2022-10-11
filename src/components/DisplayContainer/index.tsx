import React from "react";
import DisplayCurrentWeather from "../CurrentWeather";
import { DisplayForecast } from "../DisplayForecast";
import { DisplayToday } from "../DisplayToday";
import { LoadingIcon } from "../LoadingIcon";
import { StyledDisplayContainer } from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";

export function DisplayContainer() {
  const { isLoading, setIsLoading } = useWeather();

  return (
    <>
      <StyledDisplayContainer>
        {isLoading && <LoadingIcon />}
        <DisplayToday />
        <DisplayForecast />
      </StyledDisplayContainer>
    </>
  );
}
