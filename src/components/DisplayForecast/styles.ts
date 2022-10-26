import styled from "styled-components";

export const DisplayForecastContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    margin: 0 auto;
    width: 22rem;
    flex-direction: column;
  }
`;
