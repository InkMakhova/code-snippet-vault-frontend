import styles from './PageLayout.module.css';
import { Outlet } from '@tanstack/react-router';
import { Footer } from "./Footer/Footer.tsx";

export function PageLayout() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
