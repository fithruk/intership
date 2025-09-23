import { lazy, Suspense } from "react";

import { AppCircularProgress } from "../../circularProgress/circularProgress";

const AppartPost = lazy(() => import("../../appartPost/AppartPost"));

const BlogApartPage = () => {
  return (
    <Suspense fallback={<AppCircularProgress />}>
      <AppartPost />
    </Suspense>
  );
};

export default BlogApartPage;
