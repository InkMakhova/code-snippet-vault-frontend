import type { ReactNode } from "react";
import { Link as AriaLink } from 'react-aria-components';
import styles from "./Link.module.css";

type Props = {
  href: string;
  text?: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
}

export function Link({
  href,
  text,
  icon,
  iconPosition = "start",
}: Props) {
  return (
    <AriaLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      {iconPosition === "start" ? icon : null}
      {text}
      {iconPosition === "end" ? icon : null}
    </AriaLink>
  )
}
