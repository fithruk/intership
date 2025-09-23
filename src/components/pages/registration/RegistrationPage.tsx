import { lazy, Suspense } from "react";

import { AppCircularProgress } from "../../circularProgress/circularProgress";

const RegistrationForm = lazy(
  () => import("../../registration/RegistrationForm")
);

const RegistrationPage = () => {
  return (
    <Suspense fallback={<AppCircularProgress />}>
      <RegistrationForm />
    </Suspense>
  );
};

export default RegistrationPage;
