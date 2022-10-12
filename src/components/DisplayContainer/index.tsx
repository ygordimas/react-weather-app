import React from "react";
import DisplayCurrentWeather from "../CurrentWeather";
import { DisplayForecast } from "../DisplayForecast";
import { DisplayToday } from "../DisplayToday";
import { LoadingIcon } from "../LoadingIcon";
import { StyledDisplayContainer } from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";
import { DisplayError } from "../DisplayError";

export function DisplayContainer() {
  const { isLoading, setIsLoading, errorMessage } = useWeather();

  return (
    <>
      <StyledDisplayContainer>
        {isLoading && <LoadingIcon />}
        {errorMessage && <DisplayError />}
        <DisplayToday />
        <DisplayForecast />
      </StyledDisplayContainer>
    </>
  );
}
