import { StyledDisplayError } from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";

export function DisplayError() {
  const { errorMessage } = useWeather();
  return <StyledDisplayError>{errorMessage}</StyledDisplayError>;
}
