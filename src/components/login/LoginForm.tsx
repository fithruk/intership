import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, useTheme } from "@mui/material";

import { z } from "zod";
import Appinput from "../ui/appInput/AppInput";
import AppLink from "../ui/appLink/AppLink";
import Form from "../form/Form";
import { useAuthStore } from "../../store/useAuthStore";
import { useUserState } from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const theme = useTheme();
  const authState = useAuthStore();
  const userStore = useUserState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    const user = userStore.findUser({
      email: data.email,
      password: data.password,
    });
    if (user) {
      authState.signUp(user.name);
      navigate("/blog", { replace: true });
    }
  };

  return (
    <Form
      sx={{ backgroundColor: theme.palette.background.default }}
      formTitle="Sign In"
      additionalLink={() => (
        <AppLink to={"/registration"} sx={{ color: theme.palette.text.primary }}>
          Registration
        </AppLink>
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      {" "}
      <Appinput
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Appinput
        label="Пароль"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enter
      </Button>
    </Form>
  );
};

export default LoginForm;
