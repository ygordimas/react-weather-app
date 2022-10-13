import styled from "styled-components";

export const StyledWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  padding: 1rem;
  width: 12rem;
  align-items: flex-end;
  color: rgba(var(--secondary), 1);
  background-color: rgba(var(--primary), 1);
  margin: 0.2rem;
  letter-spacing: 0.1rem;

  & header {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    h1 {
      align-self: flex-start;
    }

    img {
      align-self: flex-start;
      width: min-content;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      align-self: flex-end;
    }

    p {
      align-self: flex-end;
    }
  }

  section {
    width: 100%;
    justify-self: flex-end;
    .spread {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & p:last-child {
        color: rgb(var(--white));
      }

      & div {
        width: 100%;
        position: relative;
        flex: 1;

        &::before {
          position: absolute;
          content: "";
          bottom: 0;
          left: 50%;
          border-bottom: 1px dashed rgba(var(--secondary), 0.2);
          width: 90%;
          height: 100%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;
