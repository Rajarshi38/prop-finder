import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalProps } from "../../interfaces";

function withModal(Element: React.FC) {
  return ({ isOpen, onClose, heading }: ModalProps) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"gray.900"} textColor={"white"}>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Element />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
}

export default withModal;
