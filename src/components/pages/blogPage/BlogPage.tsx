import { lazy, Suspense } from "react";

import { AppCircularProgress } from "../../circularProgress/circularProgress";

const Posts = lazy(() => import("../../posts/Posts"));

const BlogPage = () => {
  return (
    <Suspense fallback={<AppCircularProgress />}>
      <Posts />
    </Suspense>
  );
};

export default BlogPage;
