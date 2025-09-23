import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLoadArticle } from "../../hooks/useReactQuery";
import { AppCircularProgress } from "../circularProgress/circularProgress";

const AppartPost = () => {
  const { url } = useParams();
  const { data, isLoading, error } = useLoadArticle(url ?? "");
  const theme = useTheme();
  const navigate = useNavigate();
  const LazyCardMedia = lazy(() => import("../postCard/LazyCardMedia"));

  if (error || !data) {
    console.log(error);

    navigate("/Blog", { replace: true });
    return;
  }
  console.log(data);

  return (
    <Paper
      sx={{ backgroundColor: theme.palette.background.default }}
      className="mt-10 p-8 max-w-3xl mx-auto rounded-xl shadow-lg"
    >
      {isLoading ? (
        <AppCircularProgress />
      ) : (
        <>
          {" "}
          <Suspense fallback={<AppCircularProgress />}>
            <LazyCardMedia
              title={data.articleTitle}
              image={
                data.articleImg ??
                "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              }
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </Suspense>
          <Typography
            variant="h3"
            className="font-bold mb-4"
            sx={{ color: theme.palette.text.primary }}
          >
            {data.articleTitle}
          </Typography>
          <Typography
            variant="body1"
            className="leading-relaxed"
            sx={{ color: theme.palette.text.primary }}
          >
            {data.articleTextContent}
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default AppartPost;
