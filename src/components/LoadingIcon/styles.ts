import styled from "styled-components";

export const LoadingIconContainer = styled.div`
  margin: 0 auto;
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
