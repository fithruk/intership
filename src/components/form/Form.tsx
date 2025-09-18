import { Paper, type SxProps, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface FromProps {
  formTitle: string;
  children: ReactNode;
  sx: SxProps;
  onSubmit: () => void;
  additionalLink?: () => ReactNode;
}

const Form = ({ formTitle, children, onSubmit, sx, additionalLink }: FromProps) => {
  return (
    <Paper
      sx={{ ...sx }}
      className="flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto mt-20"
      elevation={3}
    >
      <Typography variant="h5" className="mb-4">
        {formTitle}
      </Typography>

      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full mb-4">
        {children}
      </form>

      {additionalLink && additionalLink()}
    </Paper>
  );
};

export default Form;
