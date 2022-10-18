import styled from "styled-components";

export const StyledDisplayContainer = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledParagraph = styled.p`
  border: 0.2rem solid rgb(var(--primary));
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem auto;
  color: rgb(var(--primary));
`;
