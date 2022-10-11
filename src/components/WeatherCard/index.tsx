import React from "react";
import { StyledWeatherCard } from "./styles";

type WeatherCardProps = {
  children: React.ReactNode[];
};

export function WeatherCard({ children }: WeatherCardProps) {
  return <StyledWeatherCard>{children}</StyledWeatherCard>;
}
