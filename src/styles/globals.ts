import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1200px;

    /* Colors */
    --gray-light: #dcdce6;
    --gray-dark: #393D3F;
    --primary-light: #7678ED;
    --primary: #7678ED;
    --primary-dark: #3D40E5;
    --absolute-white: #F8F7F9;

    /* Spacements */
    --spacement-smaller: 2px;
    --spacement-very-small: 4px;
    --spacement-small: 6px;
    --spacement-default: 10px;
    --spacement-large: 20px;
    --spacement-x-large: 28px;

    /* Radius */
    --radius-small: 6px;
    --radius-medium: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px #6690ff;
  }

  body {
    background: var(--absolute-white);
  }

`;
