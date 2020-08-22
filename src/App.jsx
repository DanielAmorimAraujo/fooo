import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Fooo from 'components/fooo';
import { theme } from './App.styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Fooo />
    </ThemeProvider>
  );
};

export default App;
