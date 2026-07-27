import { Dialog, Text, Button } from "@chakra-ui/react";

interface CheckoutDialogProps {
  open: boolean;
  setIsOpenModal: (open: boolean) => void;
}

export const CheckoutDialog = ({
  open,
  setIsOpenModal,
}: CheckoutDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={(e) => setIsOpenModal(e.open)}>
      <Dialog.Backdrop />

      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Заказ оформлен</Dialog.Title>
          </Dialog.Header>

          <Dialog.Body>
            <Text>Спасибо за покупку!</Text>
          </Dialog.Body>

          <Dialog.Footer>
            <Button onClick={() => setIsOpenModal(false)}>Закрыть</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
