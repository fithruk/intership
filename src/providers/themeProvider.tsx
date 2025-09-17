import { ThemeProvider as MUIProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../themes/theme";
import { type ReactNode } from "react";
import { useThemeStore } from "../store/useThemeStore";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeStore = useThemeStore();

  return <MUIProvider theme={themeStore.darkMode ? darkTheme : lightTheme}>{children}</MUIProvider>;
};

export default ThemeProvider;
