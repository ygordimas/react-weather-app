import styled from "styled-components";

export const StyledFormContainer = styled.header`
  width: 100%;
  background-color: rgba(var(--secondary), 1);
  margin: 0 auto;
  border-bottom: 0.2rem solid rgba(var(--primary), 1);
  padding: 1rem 0;
  box-sizing: border-box;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h1 {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    width: min-content;
    min-height: 3rem;
    letter-spacing: 0.1rem;
    padding: 1rem 0.5rem;
    font-weight: 700;
    color: rgb(var(--primary));
    position: relative;
    border: 0.2rem solid rgb(var(--primary));
    z-index: 1;
    background-color: rgb(var(--white));
  }

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    justify-items: center;
    h1 {
      grid-column: 1 / -1;
      justify-self: center;
      margin-bottom: 0.4rem;
    }
  }
`;

export const StyledForm = styled.form`
  justify-self: end;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  box-sizing: border-box;

  & > *:not(:last-child) {
    margin: 0 0.5rem;
  }

  @media only screen and (max-width: 992px) {
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 0.4rem;
    & > *:not(:last-child) {
      margin: 0;
    }
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;

  @media only screen and (max-width: 768px) {
    grid-column: 1 /-1;
  }

  input {
    width: 100%;
    height: 3rem;
    padding-left: 0.5rem;
    line-height: 3rem;
    border: 0.2rem solid rgb(var(--primary));

    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
    background-color: rgba(var(--white), 1);
    color: rgba(var(--primary), 1);

    &::placeholder {
      color: rgba(var(--primary), 1);
      font-weight: 400;
    }

    &:focus {
      outline: 0.2rem solid rgba(var(--white), 0.5);
    }

    &.zipcode {
      width: 8rem;
      @media only screen and (max-width: 992px) {
        width: 15rem;
      }
    }

    &.country {
      width: 15rem;
    }
  }
`;

export const StyledInput = styled.input``;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;

  max-height: 50vh;
  overflow-y: scroll;
  transform: translateY(100%);

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    /* background: rgba(var(--primary), 1); */
    border-radius: 100vw;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(var(--white), 1);
    border: 0.1rem solid rgb(var(--secondary));
    border-radius: 100vw;
  }

  @supports (scrollbar-color: red blue) {
    scrollbar-color: rgb(var(--white)) rgb(var(--secondary));
    scrollbar-width: thin;
  }

  li {
    box-sizing: border-box;
    cursor: pointer;
    height: 3rem;
    line-height: 3rem;
    border-radius: 0.1rem;
    margin-bottom: 0.25rem;
    width: calc(100% - 0.2rem);
    padding-left: 0.2rem;
    list-style: none;
    background: rgb(var(--white));
    border: 2px solid rgb(var(--primary));
    color: rgb(var(--primary));

    &:focus {
      outline: 2px solid rgb(var(--primary));
      z-index: 2;
      font-weight: 500;
    }
  }
`;

export const StyledButton = styled.button<{
  primary?: boolean;
  secondary?: boolean;
}>`
  background-color: ${(props) =>
    props.primary ? `rgb(var(--primary))` : "transparent"};
  color: ${(props) =>
    props.primary ? `rgb(var(--secondary))` : `rgb(var(--primary))`};
  font-size: ${(props) => (props.primary ? "1rem" : "1rem")};
  font-weight: ${(props) => (props.primary ? "700" : "400")};

  border: 0.1rem solid rgba(var(--primary), 1);
  cursor: pointer;
  padding: 0 1.5rem;
  height: 3rem;
  line-height: 0;

  transition: transform 0.1s ease-in;
  transition: background-color 0.15s ease-in;
  transition: color 0.15s ease-in;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) =>
      props.primary ? `rgb(var(--primary))` : `rgb(var(--white))`};
    color: ${(props) =>
      props.primary ? `rgb(var(--white))` : `rgb(var(--primary))`};
  }

  &:focus {
    outline: 0.2rem solid rgba(var(--white), 0.5);
  }
  @media only screen and (max-width: 992px) {
    width: 10rem;
    grid-column: 1 / -1;
    & + button {
      width: 6rem;
      height: 2.2rem;
    }
  }

  @media only screen and (max-width: 576px) {
    height: 3rem;
    padding: 0 3rem;

    & + button {
      margin-top: 0.5rem;
    }
  }
`;
