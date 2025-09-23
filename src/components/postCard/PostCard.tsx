import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  type SxProps,
  Typography,
  useTheme,
} from "@mui/material";

import { lazy, Suspense } from "react";

import { useNavigate } from "react-router-dom";
import type { NewsItems } from "../../hooks/useReactQuery";

type PostCardProps = {
  news: NewsItems;
};

const PostCard = ({ news }: PostCardProps) => {
  const { title, link, content, pubDate, creator, category, guid } = news;
  const navigate = useNavigate();
  const LazyCardMedia = lazy(() => import("./LazyCardMedia"));

  const { palette } = useTheme();

  const handleClick = () => {
    if (typeof link === "string")
      navigate(`/blog/${encodeURIComponent(guid)}`, { replace: true });
  };

  return (
    <Box
      sx={{ backgroundColor: palette.background.default }}
      className="flex flex-col w-full max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white"
    >
      <Suspense
        fallback={
          <Box
            sx={{ backgroundColor: palette.background.default }}
            className="flex justify-center items-center h-48 w-full bg-gray-100"
          >
            <CircularProgress className="text-gray-500" />
          </Box>
        }
      >
        <LazyCardMedia
          title={title as string}
          image={news.enclosure}
          className="h-48 w-full object-cover"
        />
      </Suspense>

      <Box
        sx={{ backgroundColor: palette.background.default }}
        className="flex flex-col gap-2 p-4"
      >
        <Typography
          sx={{ color: palette.text.primary }}
          variant="h5"
          className="text-lg font-semibold"
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: palette.text.primary }}
          className="text-sm line-clamp-3"
        >
          {content}
        </Typography>
        <Typography sx={{ color: palette.text.primary }} className="text-xs">
          {creator} | {pubDate}
        </Typography>
        <Typography
          sx={{ color: palette.text.primary }}
          className="text-xs italic"
        >
          {category}
        </Typography>
      </Box>

      <Box
        sx={{ backgroundColor: palette.background.default }}
        className="px-4 pb-4"
      >
        <Button
          sx={{
            backgroundColor: palette.background.default,
            color: palette.text.primary,
          }}
          className="text-sm hover:underline"
          onClick={handleClick}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default PostCard;
