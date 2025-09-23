import "./App.css";
import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BlogApartPage from "./components/pages/blogApartPage/BlogApartPage";
import BlogPage from "./components/pages/blogPage/BlogPage";
import LoginPage from "./components/pages/loginPage/LoginPage";
import RegistrationPage from "./components/pages/registration/RegistrationPage";
import { useAuthStore } from "./store/useAuthStore";
import AppLayout from "./components/layout/Layout";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authStore = useAuthStore();

  if (!authStore.isAuth) {
    return <Navigate to={"/login"} replace></Navigate>;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AppLayout>
              {" "}
              <LoginPage />
            </AppLayout>
          }
        />

        <Route
          path="/registration"
          element={
            <AppLayout>
              {" "}
              <RegistrationPage />
            </AppLayout>
          }
        />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <AppLayout>
                {" "}
                <BlogPage />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog/:url"
          element={
            <ProtectedRoute>
              <AppLayout>
                <BlogApartPage />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to={useAuthStore.getState().isAuth ? "/blog" : "/login"}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
