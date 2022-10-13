import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(var(--secondary), 1);
  color: rgba(var(--primary));
  height: 4rem;
  justify-content: flex-end;
  align-items: center;
  border-top: 0.2rem solid rgba(var(--primary), 1);

  a {
    color: rgba(var(--primary), 1);
    text-decoration: none;
    font-weight: 700;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      width: 100%;
      height: 0.3rem;
      bottom: 0;
      left: 0;
      position: absolute;
      background-color: rgb(var(--white));
      z-index: -1;
    }
  }
`;
