import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <h1>App aquí</h1>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
