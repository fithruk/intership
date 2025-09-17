import { forwardRef, type ComponentProps } from "react";
import { Link as MuiLink, Typography, type SxProps } from "@mui/material";
import { Link } from "react-router-dom";

interface AppLinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  sx: SxProps;
}

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ to, children, sx, ...props }, ref) => {
    return (
      <MuiLink
        className={"no-underline"}
        component={Link}
        ref={ref}
        to={to}
        {...props}
        sx={{ ...sx }}
      >
        <Typography component={"span"} className={"font-medium size-4"}>
          {children}
        </Typography>
      </MuiLink>
    );
  },
);

export default AppLink;
