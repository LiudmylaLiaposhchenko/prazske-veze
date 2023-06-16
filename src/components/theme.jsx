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
      paddingTop: '10px',
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      fontStyle: 'italic',
      padding: '10px 30px 0 30px',
      textAlign: 'left',
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
      padding: '10px 30px 0 30px',
      textAlign: 'justify',
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.8rem',
      padding: '5px 30px 0 30px',
      textAlign: 'left',
    },
    h1: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '1.2rem',
      color: '#fc7620',
      lineHeight: '1.4',
    },

    h2: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '1.1rem',
      color: '#fc7620',
    },

    h3: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '1rem',
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
    MuiGrid: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          textAlign: 'end',
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
