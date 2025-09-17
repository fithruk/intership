import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import type { ReactNode } from "react";
import RegistrationPage from "./components/pages/registration/RegistrationPage";
import LoginPage from "./components/pages/loginPage/LoginPage";
import BlogPage from "./components/pages/blogPage/BlogPage";
import BlogApartPage from "./components/pages/blogApartPage/BlogApartPage";

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
          element={<Navigate to={useAuthStore.getState().isAuth ? "/blog" : "/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
