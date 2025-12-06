import { Button as AriaButton, type ButtonProps } from 'react-aria-components';
import styles from './Button.module.css';

export function Button({onPress, ...props}: ButtonProps) {
  return (
    <AriaButton
      onPress={onPress}
      className={styles.button}
      {...props}
    >
      {props.children}
    </AriaButton>
  )
}

