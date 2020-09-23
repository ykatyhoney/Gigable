import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import App from "./containers/App";

function ThemeApp() {
  const jss = create({ plugins: [...jssPreset().plugins] });
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1976d2"
      },
      secondary: {
        main: "#ac4556"
      }
    }
  });
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default ThemeApp;
