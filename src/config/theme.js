import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1769aa', // Darker blue
      contrastText: 'white',
    },
    secondary: {
      main: '#2196f3', // Lighter blue
      contrastText: 'white',
    },
  },
  custom: {
    contentBackground: '#F0F8FF', // AliceBlue
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
