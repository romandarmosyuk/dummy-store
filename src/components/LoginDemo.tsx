import { useForm, type SubmitHandler } from "react-hook-form";

interface MyForm {
  name: string;
  age: number;
}

export const LoginDemo = () => {
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {
      age: 18,
    },
  });

  const submit: SubmitHandler<MyForm> = (data) => {};

  return (
    <form action="submit" onSubmit={handleSubmit(submit)}>
      <input type="text" {...register("name")} />
      <input type="number" {...register("age")} />
      <button>Отправить</button>
    </form>
  );
};
