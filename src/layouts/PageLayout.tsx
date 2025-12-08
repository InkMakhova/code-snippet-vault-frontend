import { Outlet } from '@tanstack/react-router';
import styles from './PageLayout.module.css';

export function PageLayout() {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  )
}
