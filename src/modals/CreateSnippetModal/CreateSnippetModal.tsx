import {
  ModalOverlay, Modal, Dialog,
} from "react-aria-components";

import styles from "./CreateSnippetModal.module.css";
import { EditSnippetForm } from "../../forms/EditSnippetForm/EditSnippetForm.tsx";

type SnippetFormValues = {
  title: string;
  language: string;
  tags: string;
  description: string;
  code: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (values: SnippetFormValues) => void;
};

export function CreateSnippetModal({ isOpen, onClose, onCreate }: Props) {
  return (
    <ModalOverlay
      isDismissable
      className={styles.overlay}
      isOpen={isOpen}
    >
      <Modal className={styles.modal}>
        <Dialog className={styles.dialog}>
          <EditSnippetForm
            isModal
            onSubmit={onCreate}
            onClose={onClose}
          />
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
