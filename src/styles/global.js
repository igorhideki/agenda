import { createGlobalStyle } from 'styled-components';

import { colors } from '~/styles/variables';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -weblit-font-smoothing: antialiased;
    background-color: ${colors.bgGray};
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
    color: ${colors.darkGray};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
