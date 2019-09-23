import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  main {
    max-width: 77rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    font-family 'Teko';
  }

  h3 {
      font-size: 1.7rem;
      font-weight: 600;
  }

  input[type=search] {
      -webkit-appearance: none;
  }
`;
