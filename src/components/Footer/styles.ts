import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(var(--purpleHeart), 1);
  color: rgba(var(--almond));
  height: 4rem;
  justify-content: center;
  align-items: center;
  border-top: 0.2rem solid rgba(var(--almond), 1);

  a {
    color: rgba(var(--almond), 1);
    text-decoration: none;
    font-weight: 700;
  }
`;
