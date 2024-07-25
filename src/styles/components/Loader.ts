import styled, { keyframes } from "styled-components";

const Loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 62.25px;
    height: 62.25px;
    animation: ${Loading} 1s linear infinite;
  }
`;
