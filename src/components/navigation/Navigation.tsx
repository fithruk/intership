import { Box, Grid } from "@mui/material";
import AppLink from "../ui/appLink/AppLink";
import { useTheme, type SxProps } from "@mui/material/styles";

const navItems = ["Login", "Blog"];

interface AppNavProps {
  sx: SxProps;
}

const AppNavigation = ({ sx }: AppNavProps) => {
  const theme = useTheme();

  return (
    <Box
      component={"nav"}
      className="flex justify-between basis-xs"
      sx={{ ...sx }}
    >
      {
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexGrow={1}
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          {navItems.map((link) => (
            <Grid size={3}>
              <AppLink
                to={`/${link}`}
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                {link}
              </AppLink>
            </Grid>
          ))}
        </Grid>
      }
    </Box>
  );
};

export default AppNavigation;
