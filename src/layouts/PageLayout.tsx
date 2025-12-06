import { Outlet } from '@tanstack/react-router';
import styles from './PageLayout.module.css';

export function PageLayout() {
  return (
    <div className={styles.root}>
      <div className={styles['header-container']}>
        <h1 className={styles.headerTitle}>
          Code snippet vault
        </h1>
      </div>
      <Outlet />
    </div>
  )
}
