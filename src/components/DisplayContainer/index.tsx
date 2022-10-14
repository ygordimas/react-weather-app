import React from "react";
import DisplayCurrentWeather from "../CurrentWeather";
import { DisplayForecast } from "../DisplayForecast";
import { DisplayToday } from "../DisplayToday";
import { LoadingIcon } from "../LoadingIcon";
import { StyledDisplayContainer, StyledParagraph } from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";
import { DisplayError } from "../DisplayError";

export function DisplayContainer() {
  const { current, isLoading, setIsLoading, errorMessage } = useWeather();

  return (
    <>
      <StyledDisplayContainer>
        {Object.keys(current).length > 0 && (
          <StyledParagraph>
            Checking the weather for {current.name}...
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
