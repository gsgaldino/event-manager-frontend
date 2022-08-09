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
    --red: #8D0801;
    --red-light: #d90c01;
    --red-dark: #480400;

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

  a {
    text-decoration: none;
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

  /* Scrollbar styles */

  ::-webkit-scrollbar {
    width: 7px!important;
    height: 6px!important;
    background-color: var(--gray-light);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--primary-dark);
  }
  ::-webkit-scrollbar-track{
    background-color: transform;
  }

`;
