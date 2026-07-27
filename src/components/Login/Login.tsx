"use client";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@components/ui/password-input";
import { useLoginMutation } from "@hooks/useLoginMutation";
import type { LoginParams } from "@interfaces/Login";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>();
  const navigate = useNavigate();

  const mutation = useLoginMutation();

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.username} required>
          <Field.Label>Username</Field.Label>
          <Input {...register("username")} />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password} required>
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" loading={mutation.isPending}>
          Войти
        </Button>
        {mutation.error ? <div>Неверный логин или пароль</div> : null}
        <Link to="/auth/register">Нет аккаунта? Зарегистрируйтесь</Link>
      </Stack>
    </form>
  );
};
