import { Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";
import AppNavigation from "../navigation/Navigation";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import AppContainer from "../ui/appContainer/AppContainer";

interface AppProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppProps) => {
  const theme = useTheme();
  return (
    <Paper sx={{ backgroundColor: theme.palette.background.default }}>
      <AppContainer
        sx={{ backgroundColor: theme.palette.background.default }}
        className="flex flex-col min-h-screen justify-center pt-4 pb-4 pr-20 pl-20"
      >
        <Grid container display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          {" "}
          <Grid size={3} className="flex items-center">
            <Typography
              variant="h5"
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}
            >
              Logo
            </Typography>
          </Grid>
          <Grid size={3}>
            <AppNavigation sx={{ backgroundColor: theme.palette.background.default }} />
          </Grid>
          <Grid size={3}>
            <ThemeSwitcher />
          </Grid>
        </Grid>
        <Grid flexGrow={1}>{children}</Grid>
        <Grid>Footer</Grid>
      </AppContainer>
    </Paper>
  );
};

export default AppLayout;
