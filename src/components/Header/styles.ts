import styled from "styled-components";

export const StyledFormContainer = styled.header`
  width: 100%;
  background-color: rgba(var(--secondary), 1);

  border-bottom: 0.2rem solid rgba(var(--primary), 1);
  padding: 1rem 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */

  h1 {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    color: rgb(var(--primary));
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background-color: rgb(var(--white));
      z-index: -1;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  /* margin: 0 auto; */
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  align-items: center;

  & > * {
    margin: 0 0.2rem;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;

  input {
    border: none;
    font-size: 1.2rem;
    font-weight: 300;
    background-color: rgba(var(--primary), 1);
    color: rgba(var(--secondary), 1);

    &.zipcode {
      width: 8rem;
    }

    &.country {
      width: 15rem;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border: none;
  border-radius: 0.35rem;

  box-sizing: border-box;
  padding-left: 0.5rem;
  border: 1px solid black;
`;

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

  li {
    box-sizing: border-box;
    cursor: pointer;
    height: 3rem;
    line-height: 3rem;
    border-radius: 0.35rem;
    margin-bottom: 0.25rem;
    width: calc(100% - 0.2rem);
    padding-left: 0.2rem;
    list-style: none;
    background-color: rgb(var(--secondary));
    border: 1px solid rgb(var(--primary));
    color: rgb(var(--primary));
  }
`;

export const StyledButton = styled.button<{
  primary?: boolean;
  secondary?: boolean;
}>`
  background-color: transparent;
  color: rgba(var(--primary), 1);
  font-size: ${(props) => (props.primary ? "1rem" : "1rem")};
  font-weight: ${(props) => (props.primary ? "700" : "400")};
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(var(--primary), 1);
  cursor: pointer;
  padding: 0 1rem;
  height: 2rem;
  line-height: 0;
`;
