import styles from "./Header.module.css";

export function Header({headerText}: {headerText: string}) {
  return (
    <div className={styles['header-container']}>
      <h1 className={styles['header-title']}>
        {headerText}
      </h1>
    </div>
  )
}
