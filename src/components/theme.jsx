import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fc7620',
    },
    secondary: {
      main: 'rgb(232, 230, 230)',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
    },
    h1: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '1.2rem',
      color: '#fc7620',
    },

    h2: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '1.1rem',
      color: '#fc7620',
    },

    h3: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(232, 230, 230)',
          borderRadius: '20px',
          padding: '10px',
          margin: '10px',
          boxShadow: 'none',
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
