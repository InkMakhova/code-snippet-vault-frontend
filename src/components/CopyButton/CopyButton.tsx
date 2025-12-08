import styles from "./CopyButton.module.css";
import CopyIcon from "../../assets/copy-icon.svg?react";
import { Button } from "react-aria-components";
import { useToast } from "../Toast/Toast.tsx";

type Props = {
  textToCopy: string;
  toastText: string;
  ariaLabel: string;
};

export function CopyButton({
  textToCopy,
  toastText,
  ariaLabel,
}: Props) {
  const { showToast } = useToast();
  return (
    <Button
      className={styles.button}
      aria-label={ariaLabel}
      onPress={async () => {
        if (textToCopy.length > 0) {
          await navigator.clipboard.writeText(textToCopy);
          showToast(toastText);
        }
      }}
    >
      <CopyIcon width="1rem" height="1rem"/>
    </Button>
  );
}
