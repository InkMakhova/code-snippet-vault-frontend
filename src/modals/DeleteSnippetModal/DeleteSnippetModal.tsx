import {
  ModalOverlay,
  Modal,
  Dialog,
  Heading,
  Button,
} from "react-aria-components";
import styles from "./DeleteSnippetModal.module.css";

type Props = {
  isOpen: boolean;
  snippetTitle?: string;
  onConfirm: () => void;
  onClose: () => void;
  isPending?: boolean;
};

export function DeleteSnippetModal({
  isOpen,
  snippetTitle,
  onConfirm,
  onClose,
  isPending = false,
}: Props) {
  return (
    <ModalOverlay
      isOpen={isOpen}
      isDismissable
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      className={styles.overlay}
    >
      <Modal className={styles.modal}>
        <Dialog className={styles.dialog}>
          {() => (
            <div className={styles.content}>
              <div className={styles.header}>
                <Heading slot="title" className={styles.title}>
                  Delete snippet
                </Heading>
                <Button
                  aria-label="Close"
                  className={styles.closeButton}
                  onPress={onClose}
                  isDisabled={isPending}
                >
                  ×
                </Button>
              </div>

              <p className={styles.description}>
                Are you sure you want to delete{" "}
                <span className={styles.snippetName}>
                  {snippetTitle}
                </span>
                ?
              </p>

              <div className={styles.footer}>
                <Button
                  type="button"
                  className={styles.cancel}
                  onPress={onClose}
                  isDisabled={isPending}
                >
                  Cancel
                </Button>

                <Button
                  type="button"
                  className={`${styles.delete} ${isPending ? styles.loading : ""}`}
                  onPress={onConfirm}
                  isDisabled={isPending}
                >
                  {isPending ? "Deleting..." : "Delete snippet"}
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
