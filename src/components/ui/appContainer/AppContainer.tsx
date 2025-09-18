import { Grid, type SxProps } from "@mui/material";
import type { ReactNode } from "react";

interface AppConteonerProps {
  children: ReactNode;
  className?: string;
  sx?: SxProps;
}

const AppContainer = ({ children, className, sx }: AppConteonerProps) => {
  return (
    <Grid container className={className} sx={{ ...sx }}>
      {children}
    </Grid>
  );
};

export default AppContainer;
