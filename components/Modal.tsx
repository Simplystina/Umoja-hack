import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context";

const ModalComponent = ({
  text,
}: {
  text: string;
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { modalMessage, displayModal, showModal } = useGlobalContext();

  return (
    <>
      {/* <Button onClick={() => displayModal(true)}>Open Modal</Button> */}

      <Modal isOpen={showModal} onClose={() => displayModal(false)}>
        <ModalOverlay onClick={() => displayModal(false)} />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            {/* <Text>{text}</Text> */}
          {modalMessage}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => displayModal(false)}
            >
              Close
            </Button>
            {/* {onClick && <Button onClick={onClick} variant="ghost">Proceed</Button>} */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
