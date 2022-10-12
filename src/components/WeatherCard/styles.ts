import styled from "styled-components";

export const StyledWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  width: 10rem;
  align-items: flex-end;
  color: rgba(var(--purpleHeart), 1);
  background-color: rgba(var(--almond), 1);
  margin: 0.2rem;

  img {
    width: min-content;
  }
`;
