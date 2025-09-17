import { Grid, Typography, useTheme } from "@mui/material";
import { useAuthStore } from "../../store/useAuthStore";
import allPosts from "../../posts.json";
import PostCard from "../postCard/PostCard";

const Posts = () => {
  const authState = useAuthStore();
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" className="text-3xl font-bold mt-5 mb-5">
        Hello {authState.name}!
      </Typography>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        spacing={2}
      >
        {allPosts.map((post) => (
          <Grid
            key={post.id}
            size={{ xs: 12, md: 6, lg: 4 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <PostCard
              {...post}
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
