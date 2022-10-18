import React from "react";
import DisplayCurrentWeather from "../CurrentWeather";
import { DisplayForecast } from "../DisplayForecast";
import { DisplayToday } from "../DisplayToday";
import { LoadingIcon } from "../LoadingIcon";
import { StyledDisplayContainer, StyledParagraph } from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";
import { DisplayError } from "../DisplayError";

export function DisplayContainer() {
  const { current, isLoading, setIsLoading, errorMessage, forecast } =
    useWeather();

  return (
    <>
      <StyledDisplayContainer>
        {Object.keys(current).length > 0 && (
          <StyledParagraph>
            Checking the weather for {forecast.location.name},{" "}
            {forecast.location.region}, {forecast.location.country}...
          </StyledParagraph>
        )}
        {isLoading && <LoadingIcon />}
        {errorMessage && <DisplayError />}
        <DisplayToday />
        <DisplayForecast />
      </StyledDisplayContainer>
    </>
  );
}
