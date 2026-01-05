import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { useState } from "react";

export default function AddTransactionModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" size="sm" onPress={() => setOpen(true)}>
        Add transaction
      </Button>

      <Modal isOpen={open} onOpenChange={setOpen} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add transaction</ModalHeader>
              <ModalBody>
                <Input label="Description" placeholder="Groceries" />
                <Input label="Amount" type="number" placeholder="0.00" />
                <Input label="Category" placeholder="Food" />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

