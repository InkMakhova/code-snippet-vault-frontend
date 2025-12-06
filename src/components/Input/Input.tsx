import { TextField, Input as AriaInput } from 'react-aria-components';
import type { ComponentProps } from "react";

import styles from './Input.module.css';

type Props = ComponentProps<"input"> & {
  placeholder?: string;
}

export function Input({ placeholder, ...props }: Props) {
  return (
    <TextField>
      <AriaInput {...props} placeholder={placeholder} className={styles.input}/>
    </TextField>
  )
}
