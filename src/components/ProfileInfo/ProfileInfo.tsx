import { Button, Field, HStack, Input, Stack } from "@chakra-ui/react";
import { useUserMutation } from "@hooks/useUserMutation";
import type { User } from "@interfaces/UserProfile";
import { useState } from "react";

interface ProfileInfoProps {
  user: User;
}

export const ProfileInfo = ({ user }: ProfileInfoProps) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [email, setEmail] = useState(user.email);
  const [isEdit, setIsEdit] = useState(false);

  const mutation = useUserMutation();

  const handleSave = () => {
    setIsEdit(false);

    mutation.mutate(
      { id: user.id, firstName, email },
      { onSuccess: (res) => console.log("Данные пользователя обновлены", res) },
    );
  };

  const handleCancel = () => {
    setIsEdit(false);
    setEmail(user.email);
    setFirstName(user.firstName);
  };

  return (
    <Stack gap={4}>
      <Field.Root>
        <Field.Label>Имя</Field.Label>

        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!isEdit}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>

        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEdit}
        />
      </Field.Root>
      {!isEdit ? (
        <Button
          alignSelf="start"
          colorPalette="blue"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Редактировать
        </Button>
      ) : (
        <HStack alignSelf="start">
          <Button colorPalette="blue" onClick={handleSave}>
            Сохранить
          </Button>
          <Button colorPalette="gray" onClick={handleCancel}>
            Отменить
          </Button>
        </HStack>
      )}
    </Stack>
  );
};
