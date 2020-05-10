import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 16px; 
   
  }

body {
  box-sizing: border-box;
  padding: 3rem;
}
`;

theme = {
  primaryColor: '',
  secondaryColor: '',
  tertiaryColor: '',
  spacing: (value) => `${0.25 * factor}rem`,
};

export const GlobalTheme = function () {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};
