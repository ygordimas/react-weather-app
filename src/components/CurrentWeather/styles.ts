import styled from "styled-components";

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  width: 20rem;
  align-items: flex-end;
  grid-area: current;

  img {
    width: min-content;
  }
`;
