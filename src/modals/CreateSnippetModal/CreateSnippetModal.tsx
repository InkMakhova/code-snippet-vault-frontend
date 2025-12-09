import {
  ModalOverlay, Modal, Dialog,
} from "react-aria-components";

import styles from "./CreateSnippetModal.module.css";
import { EditSnippetForm } from "../../forms/EditSnippetForm/EditSnippetForm.tsx";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function CreateSnippetModal({ isOpen, onClose }: Props) {
  return (
    <ModalOverlay
      isDismissable
      className={styles.overlay}
      isOpen={isOpen}
    >
      <Modal className={styles.modal}>
        <Dialog className={styles.dialog}>
          <EditSnippetForm isModal onClose={onClose} />
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
