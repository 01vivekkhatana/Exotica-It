import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff", // Set your default background color
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
