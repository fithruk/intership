import { TextField, type SxProps } from "@mui/material";
import { forwardRef } from "react";

interface AppInputProps {
  sx?: SxProps;
  name: string;
  type: "text" | "email" | "password";
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Appinput = forwardRef<HTMLInputElement, AppInputProps>(({ sx, ...rest }, ref) => {
  return <TextField fullWidth sx={{ ...sx }} {...rest} inputRef={ref} />;
});

export default Appinput;
