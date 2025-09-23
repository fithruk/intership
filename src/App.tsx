import "./App.css";
import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BlogApartPage from "./components/pages/blogApartPage/BlogApartPage";
import BlogPage from "./components/pages/blogPage/BlogPage";
import LoginPage from "./components/pages/loginPage/LoginPage";
import RegistrationPage from "./components/pages/registration/RegistrationPage";
import { useAuthStore } from "./store/useAuthStore";

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
        <Route path="/login" element={<LoginPage />} />

        <Route path="/registration" element={<RegistrationPage />} />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <BlogApartPage />
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
