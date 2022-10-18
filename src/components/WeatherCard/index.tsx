import React from "react";
import { StyledWeatherCard } from "./styles";

type WeatherCardProps = {
  children: React.ReactNode[];
  primary?: boolean;
  secondary?: boolean;
};

export function WeatherCard({
  children,
  primary,
  secondary,
}: WeatherCardProps) {
  return (
    <StyledWeatherCard primary={primary} secondary={secondary}>
      {children}
    </StyledWeatherCard>
  );
}
