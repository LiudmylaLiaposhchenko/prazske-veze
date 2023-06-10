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
      fontFamily: 'Inter',
      fontSize: '1rem',
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: '0.9rem',
    },
    h6: {
      fontFamily: "'Inknut Antiqua', serif",
      fontSize: '1.2rem',
      color: '#fc7620',
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
