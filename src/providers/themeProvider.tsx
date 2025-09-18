import { ThemeProvider as MUIProvider } from "@mui/material";
import type { ReactNode } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { darkTheme, lightTheme } from "../themes/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeStore = useThemeStore();

  return <MUIProvider theme={themeStore.darkMode ? darkTheme : lightTheme}>{children}</MUIProvider>;
};

export default ThemeProvider;
