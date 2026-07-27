import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@components/ui/password-input";
import type { RegisterParams } from "@interfaces/RegisterParams";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<RegisterParams>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  useEffect(() => {
    if (password) {
      trigger("confirmPassword");
    }
  }, [password, trigger]);

  const onSubmit = handleSubmit((data) => {
    console.log("Пользователь зарегистрирован", data);
    navigate("/");
  });

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <Stack gap={4} maxW="sm">
        <Field.Root invalid={!!errors.username} required>
          <Field.Label>Username</Field.Label>
          <Input
            {...register("username", {
              required: "Введите имя пользователя",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
            })}
          />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email} required>
          <Field.Label>Email</Field.Label>
          <Input
            type="email"
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Некорректный email",
              },
            })}
          />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password} required>
          <Field.Label>Пароль</Field.Label>
          <PasswordInput
            {...register("password", {
              required: "Введите пароль",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
            })}
          />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.confirmPassword} required>
          <Field.Label>Повторите пароль</Field.Label>
          <PasswordInput
            {...register("confirmPassword", {
              required: "Повторите пароль",
              validate: (value) =>
                value === getValues("password") || "Пароли не совпадают",
            })}
          />
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
