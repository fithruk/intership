import { lazy, Suspense } from "react";

import { AppCircularProgress } from "../../circularProgress/circularProgress";

const LoginForm = lazy(() => import("../../login/LoginForm"));

const LoginPage = () => {
  return (
    <Suspense fallback={<AppCircularProgress />}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
