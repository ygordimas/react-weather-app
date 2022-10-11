import styled from "styled-components";

export const TodayWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  width: 20rem;
  align-items: flex-end;

  img {
    width: min-content;
  }
`;

export const TodayWeatherContainer = styled.div`
  grid-area: forecastToday;
`;
