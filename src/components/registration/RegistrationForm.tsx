import { zodResolver } from "@hookform/resolvers/zod";
import { Button, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useUserState } from "../../store/useUserStore";
import Form from "../form/Form";
import Appinput from "../ui/appInput/AppInput";

export const RegisterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z
    .string()
    .refine(
      (name) => name.split(" ").filter(Boolean).length > 1,
      "Name must consist of at least two words.",
    ),
});

export type REgisterFormValues = z.infer<typeof RegisterSchema>;

const RegistrationForm = () => {
  const userStore = useUserState();
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<REgisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: REgisterFormValues) => {
    userStore.createUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    navigate("/login", { replace: true });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      sx={{ backgroundColor: theme.palette.background.default }}
      formTitle="Registration"
    >
      <Appinput
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <Appinput
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Appinput
        label="Name"
        type="text"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enter
      </Button>
    </Form>
  );
};

export default RegistrationForm;
