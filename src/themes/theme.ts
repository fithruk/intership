import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E8E8EA",
    },
    background: {
      default: "#E8E8EA",
      paper: "#181A2A",
    },
    text: { primary: "#181A2A", secondary: "#3B3C4A" },
    secondary: {
      main: "#3B3C4A",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#181A2A",
    },

    background: {
      default: "#181A2A",
      paper: "#E8E8EA",
    },
    text: { primary: "#FFFFFF", secondary: "#3B3C4A" },
    secondary: {
      main: "#f48fb1",
    },
  },
});

export { lightTheme, darkTheme };
