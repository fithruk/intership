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

<<<<<<< HEAD
const Appinput = forwardRef<HTMLInputElement, AppInputProps>(({ sx, register, ...rest }, ref) => {
  return <TextField fullWidth sx={{ ...sx }} {...register} {...rest} inputRef={ref} />;
});
=======
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
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85

export default Appinput;
