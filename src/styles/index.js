import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
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
    margin-top: 50px;
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

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
`;
