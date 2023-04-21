/* eslint-disable import/prefer-default-export */
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { 
      main: "#FF9800",
      contrastText: "#FFFFFF" 
    },
    secondary: { 
      main: "#607D8B",
      contrastText: "#FFFFFF" 
    },
    text: { 
      primary: "#212121", 
      secondary: "#757575" 
    },
    background: { 
      default: "#FFFFFF", 
      paper: "#F5F5F5" 
    },
    warning: {
      main: "#F44336",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#F44336",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF9800",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#607D8B",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
    background: {
      default: "#212121",
      paper: "#424242",
    },
    warning: {
      main: "#FFC107",
    },
    info: {
      main: "#03A9F4",
    },
    success: {
      main: "#8BC34A",
    },
    error: {
      main: "#F44336",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
