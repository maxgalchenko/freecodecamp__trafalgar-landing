import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  mediaTablet: '@media(min-width: 768px)',
  mediaDesktop: '@media(min-width: 1280px)',

  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },

  colors: {
    blue: '#458FF6',
    darkBlue: '#233348',
    white: 'white',
    black: 'black',
  },

  font: {
    light: {
      fontWeight: 300,
      fontStyle: 'normal',
    },
    regular: {
      fontWeight: 400,
      fontStyle: 'normal',
    },
    bold: {
      fontWeight: 700,
      fontStyle: 'normal',
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
