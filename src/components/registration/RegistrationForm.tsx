import { zodResolver } from "@hookform/resolvers/zod";
import { Button, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Form from "../form/Form";
import Appinput, { type InputTypes } from "../ui/appInput/AppInput";
import { useRegistrationPost } from "../../hooks/useReactQuery";

export const RegisterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z
    .string()
    .refine(
      (name) => name.split(" ").filter(Boolean).length > 1,
<<<<<<< HEAD
      "Name must consist of at least two words.",
=======
      "Name must consist of at least two words."
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
    ),
});

export type RegisterFormValues = z.infer<typeof RegisterSchema>;

const inputs: {
  label: string;
  type: InputTypes;
  name: string;
}[] = [
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
  { label: "Name", type: "text", name: "name" },
];

const RegistrationForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { mutate } = useRegistrationPost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (submitData: RegisterFormValues) => {
    mutate(submitData, {
      onSuccess: () => {
        navigate("/login", { replace: true });
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      sx={{ backgroundColor: theme.palette.background.default }}
      formTitle="Registration"
    >
      {inputs.map((input) => (
        <Appinput
          {...input}
          register={register(input.name as keyof RegisterFormValues)}
          error={!!errors[input.name as keyof RegisterFormValues]}
          helperText={errors[input.name as keyof RegisterFormValues]?.message}
        />
      ))}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enter
      </Button>
    </Form>
  );
};

export default RegistrationForm;
