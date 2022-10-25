import { StyledDisplayError } from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";
import { Error } from "styled-icons/boxicons-solid";

export function DisplayError() {
  const { errorMessage } = useWeather();
  return (
    <StyledDisplayError>
      <Error size={"4rem"} />
      <p>{errorMessage}</p>
    </StyledDisplayError>
  );
}
