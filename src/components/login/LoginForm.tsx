import { zodResolver } from "@hookform/resolvers/zod";
import { Button, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuthStore } from "../../store/useAuthStore";
import Form from "../form/Form";
import Appinput, { type InputTypes } from "../ui/appInput/AppInput";
import AppLink from "../ui/appLink/AppLink";
import { useLoginPost } from "../../hooks/useReactQuery";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const inputs: {
  label: string;
  type: InputTypes;
  name: string;
}[] = [
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
];

const LoginForm = () => {
  const theme = useTheme();
  const authState = useAuthStore();
  const navigate = useNavigate();
  const { mutate } = useLoginPost();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (loginData: LoginFormValues) => {
    mutate(loginData, {
      onError: (error) => {
        alert(error.message);
      },
      onSuccess: (data) => {
        authState.signUp(data.name);
        navigate("/blog", { replace: true });
      },
    });
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
      {inputs.map((input) => (
        <Appinput
          {...input}
          register={register(input.name as keyof LoginFormValues)}
          error={!!errors[input.name as keyof LoginFormValues]}
          helperText={errors[input.name as keyof LoginFormValues]?.message}
        />
      ))}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enter
      </Button>
    </Form>
  );
};

export default LoginForm;
