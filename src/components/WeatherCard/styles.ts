import styled from "styled-components";

export const StyledWeatherCard = styled.div<{
  primary?: boolean;
  secondary?: boolean;
}>`
  display: flex;
  flex-direction: column;
  min-width: 16rem;
  align-items: flex-end;
  color: ${(props) =>
    props.primary ? `rgb(var(--secondary))` : `rgb(var(--primary))`};
  background-color: ${(props) =>
    props.primary ? `rgb(var(--primary))` : `rgb(var(--secondary))`};
  letter-spacing: 0.1rem;
  margin: 0.2rem;
  border: ${(props) =>
    props.primary ? `none` : `.2rem solid rgb(var(--primary))`};

  & header {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    & > :not(h1) {
      margin-right: 0.5rem;
    }

    h1 {
      align-self: flex-start;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 0rem;
      padding-block: 0.5rem;

      border-bottom: ${(props) =>
        props.primary
          ? `1px solid rgb(var(--secondary))`
          : `1px solid rgb(var(--primary))`};

      &::before {
        content: "•";
        padding-inline: 0.5rem;
      }
    }

    img {
      align-self: flex-end;
      width: min-content;
      margin-top: 0.5rem;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 500;
      align-self: flex-start;
      color: ${(props) =>
        props.primary
          ? `0.1rem solid rgb(var(--secondary))`
          : `0.1rem solid rgb(var(--primary))`};
      /* background-color: rgb(var(--secondary)); */
      padding: 0.5rem 0.5rem;
      margin-left: 0.5rem;
      border: ${(props) =>
        props.primary
          ? `0.1rem solid rgb(var(--secondary))`
          : `0.1rem solid rgb(var(--primary))`};
      letter-spacing: 0;
    }

    p {
      align-self: flex-end;
    }
  }

  section {
    width: 100%;
    box-sizing: border-box;
    justify-self: flex-end;
    align-items: center;
    padding: 1rem 0.5rem;

    .spread {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & p:last-child {
        color: ${(props) =>
          props.primary ? `rgb(var(--white))` : `rgb(var(--primary))`};
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
          border-bottom: ${(props) =>
            props.primary
              ? `1px dashed rgba(var(--secondary), .25)`
              : `1px dashed rgb(var(--white))`};
          width: 90%;
          height: 100%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;
