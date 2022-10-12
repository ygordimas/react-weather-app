import styled from "styled-components";

export const StyledFormContainer = styled.header`
  width: 100%;
  background-color: rgba(var(--purpleHeart), 1);

  border-bottom: 0.2rem solid rgba(var(--almond), 1);
  padding: 1rem 0;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 0 auto;
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
    background-color: rgba(var(--almond), 1);
    color: rgba(var(--purpleHeart), 1);

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
  bottom: 0;
  left: 0;
  width: 100%;

  transform: translateY(100%);
  li {
    cursor: pointer;
    height: 2rem;
    margin-bottom: 0.25rem;
    list-style: none;
    background-color: indianred;
  }
`;

export const StyledButton = styled.button<{
  primary?: boolean;
  secondary?: boolean;
}>`
  background-color: transparent;
  color: rgba(var(--almond), 1);
  font-size: ${(props) => (props.primary ? "1rem" : "1rem")};
  font-weight: ${(props) => (props.primary ? "700" : "400")};
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(var(--almond), 1);
  cursor: pointer;
  padding: 0 1rem;
  height: 2rem;
  line-height: 0;
`;
