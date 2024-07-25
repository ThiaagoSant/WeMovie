import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white};
    font-family: 'Open Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    margin: 0 180px;

    @media (max-width: 911px) {
      margin: 0 100px;
    }
    @media (max-width: 768px) {
      margin: 0 16px;
    }

    
  }

  button, input {
    border: none;
    outline: none;
    background: none;
    font-family: 'Open sans';
  }

  a {
    transition: all 0.2s;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    transition: all 0.2s;
    cursor: pointer;
    line-height: 0;
  }
`;
