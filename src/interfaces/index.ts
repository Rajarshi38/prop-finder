export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: React.ReactNode | string;
}
