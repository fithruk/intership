import { Box, CircularProgress, useTheme } from "@mui/material";

const AppCircularProgress = () => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      className="flex justify-center items-center"
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <CircularProgress
        sx={{
          color: theme.palette.text.primary,
          backgroundColor: "transparent",
        }}
      />
    </Box>
  );
};

export { AppCircularProgress };
