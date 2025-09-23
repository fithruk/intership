import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import allPosts from "../../posts.json";
import { useAuthStore } from "../../store/useAuthStore";
import PostCard from "../postCard/PostCard";
import { type FormEvent } from "react";
import {
  useFeedURLPost,
  useLoadArticlesPreview,
} from "../../hooks/useReactQuery";
import Appinput from "../ui/appInput/AppInput";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  urlRSS: string;
  force: boolean;
}

const Posts = () => {
  const authState = useAuthStore();
  const theme = useTheme();

  const { register, handleSubmit, control, getValues } = useForm<FormValues>({
    defaultValues: {
      urlRSS: "https://www.pravda.com.ua/eng/rss/view_mainnews/",
      force: false,
    },
  });
  const { mutate } = useFeedURLPost();
  // const { data: allPosts = [] } = useLoadArticlesPreview();

  const onSubmit = handleSubmit((data) => {
    mutate(
      { url: data.urlRSS, force: data.force },
      {
        onError: (error: any) => alert(error.message),
        onSuccess: () => alert("Success"),
      }
    );
  });

  return (
    <>
      <Typography variant="h4" className="text-3xl font-bold mt-5 mb-5">
        Hello {authState.name}!
      </Typography>
      <Box
        component="form"
        className="w-full max-w-2xl mx-auto p-4 flex flex-col md:flex-row items-center gap-4"
        sx={{ "& .MuiTextField-root": { m: 0 } }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Appinput name="urlRSS" type="text" register={register("urlRSS")} />
        <FormGroup>
          <Controller
            name="force"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label="Force"
              />
            )}
          />
        </FormGroup>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            boxShadow: theme.palette.background.paper,
          }}
          className="mt-2 md:mt-0"
        >
          Submit
        </Button>
      </Box>
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
