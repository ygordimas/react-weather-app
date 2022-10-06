import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
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
