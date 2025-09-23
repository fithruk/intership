import { type SxProps, TextField } from "@mui/material";
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export type InputTypes = "text" | "email" | "password";

interface AppInputProps {
  sx?: SxProps;
  name: string;
  type: InputTypes;
  label?: string;
  error?: boolean;
  helperText?: string;
  register: UseFormRegisterReturn;
}

const Appinput = forwardRef<HTMLInputElement, AppInputProps>(
  ({ sx, register, ...rest }, ref) => {
    return (
      <TextField
        fullWidth
        sx={{ ...sx }}
        {...register}
        {...rest}
        inputRef={ref}
      />
    );
  }
);

export default Appinput;
