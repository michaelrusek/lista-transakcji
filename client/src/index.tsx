import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/app.scss";
import App from "./App";
import theme from "./theme/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
