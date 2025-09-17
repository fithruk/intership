import { Box, CircularProgress, Paper, Typography, useTheme } from "@mui/material";
import allPosts from "../../posts.json";
import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

const AppartPost = () => {
  const { id } = useParams();

  const theme = useTheme();
  const targetPost = id ? allPosts.find((post) => post.id === +id) : null;
  const LazyCardMedia = lazy(() => import("../postCard/LazyCardMedia"));

  if (!targetPost || !id) {
    return (
      <Paper
        sx={{ backgroundColor: theme.palette.background.default }}
        className="mt-10 p-8 text-center"
      >
        <Typography variant="h5" className="text-red-500">
          Пост не найден
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      sx={{ backgroundColor: theme.palette.background.default }}
      className="mt-10 p-8 max-w-3xl mx-auto rounded-xl shadow-lg"
    >
      <Suspense
        fallback={
          <Box component={"div"} className="flex justify-center items-center">
            <CircularProgress
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: "transparent",
              }}
            />
          </Box>
        }
      >
        <LazyCardMedia
          title={targetPost.title}
          image={targetPost.image}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </Suspense>

      <Typography
        variant="h3"
        className="font-bold mb-4"
        sx={{ color: theme.palette.text.primary }}
      >
        {targetPost.title}
      </Typography>
      <Typography
        variant="body1"
        className="leading-relaxed"
        sx={{ color: theme.palette.text.primary }}
      >
        {targetPost.text}
      </Typography>
    </Paper>
  );
};

export default AppartPost;
