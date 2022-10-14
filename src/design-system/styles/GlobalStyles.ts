import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }

  *,
  *:after,
  *:before { box-sizing: border-box; }

  html, body {
    min-height: 100vh;
  }

  html {
    min-height: 100vh;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: transparent;
    background-color: transparent;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong, b {
    font-weight: 600;
  }

  div[role="group"][tabindex] {
    display: block;
    min-height: 100vh;
    position: relative;
  }

  div.integrator {
    border: 0px;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyles;
