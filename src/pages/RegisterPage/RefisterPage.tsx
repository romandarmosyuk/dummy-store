import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@components/ui/password-input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const passwordSchema = z
    .string()
    .min(6, "Минимум 6 символов")
    .regex(/[A-Z]/, "Минимум одна большая буква")
    .regex(/[0-9]/, "Минимум одна цифра");

  const formSchema = z
    .object({
      email: z.email("Неверный формат email"),
      password: passwordSchema,
      confirmPassword: z
        .string()
        .min(1, { error: "Пароль не может быть пустым" }),
      username: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      error: "Пароли не совпадают",
      path: ["confirmPassword"], // ошибка будет показываться только для конкретного поля
    });

  type FormStateInput = z.input<typeof formSchema>;
  type FormStateOutput = z.output<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateInput, unknown, FormStateOutput>({
    resolver: zodResolver(formSchema),
  });

  console.log("render");

  const onSubmit = handleSubmit((data: FormStateOutput) => {
    console.log("Пользователь зарегистрирован", data);
    //  navigate("/");
  });

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <Stack gap={4} maxW="sm">
        <Field.Root invalid={!!errors.username}>
          <Field.Label>Username</Field.Label>
          <Input {...register("username")} />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email}>
          <Field.Label>Email</Field.Label>
          <Input type="email" {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Пароль</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.confirmPassword}>
          <Field.Label>Повторите пароль</Field.Label>
          <PasswordInput {...register("confirmPassword")} />
          <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" width="full">
          Зарегистрироваться
        </Button>

        <Link to="/auth/login">Уже есть аккаунт? Войти</Link>
      </Stack>
    </form>
  );
};
