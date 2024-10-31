import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: "#005380",
            light: "#807a00",
        },
        secondary: {
            main: "#800020",
        },
        info: {
            main: "#807a00"
        }
    },
    typography: {
        h1: {
            fontSize: "3em",
            fontWeight:600,
        },
        h2: {
            fontSize: "1.75em",
            fontWeight: 600,
        },
        h3: {
            fontSize: "1.5em",
            fontWeight: 600,
        }
    }
});

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App/>
      </ThemeProvider>
  </React.StrictMode>
);
