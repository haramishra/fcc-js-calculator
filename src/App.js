import React from 'react';
// import Display from './components/Display';
import Buttons from './components/Buttons';
import Paper from '@material-ui/core/Paper'
import './App.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Buttons />
      </ThemeProvider>
    </div>
  );
}

export default App;
