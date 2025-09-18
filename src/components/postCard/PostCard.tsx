import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  type SxProps,
  Typography,
} from "@mui/material";
import { lazy, Suspense } from "react";

import { useNavigate } from "react-router-dom";

type PostCardProps = {
  id: number;
  title: string;
  text: string;
  image: string;
  sx: SxProps;
};

const PostCard = ({ id, image, text, title, sx }: PostCardProps) => {
  const navigate = useNavigate();
  const LazyCardMedia = lazy(() => import("./LazyCardMedia"));
  const handleClick = () => {
    navigate(`/blog/${id}`, { replace: true });
  };

  return (
    <Card
      sx={{ ...sx }}
      className="flex flex-col w-full max-w-sm rounded-2xl shadow-lg overflow-hidden"
    >
      <Suspense
        fallback={
          <Box component={"div"} className="flex justify-center items-center">
            <CircularProgress sx={{ ...sx, backgroundColor: "transparent" }} />
          </Box>
        }
      >
        {" "}
        <LazyCardMedia title={title} image={image} className="h-48 w-full object-cover" />
      </Suspense>
      <CardContent className="flex flex-col gap-2 p-4">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-lg font-semibold"
          sx={{ ...sx, backgroundColor: "transparent" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ ...sx, backgroundColor: "transparent" }}
          className="text-sm line-clamp-3"
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions className="px-4 pb-4">
        <Button
          sx={{ ...sx, backgroundColor: "transparent" }}
          size="small"
          className=" hover:underline"
          onClick={handleClick}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
