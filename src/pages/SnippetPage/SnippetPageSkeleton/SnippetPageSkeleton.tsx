import styles from "./SnippetPageSkeleton.module.css";
import { Card } from "../../../components/Card/Card";
import { Header } from "../../../components/Header/Header.tsx";
import { Skeleton } from "../../../components/Skeleton/Skeleton";

export function SnippetPageSkeleton() {
  return (
    <div className={styles.page}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Skeleton className={styles.breadcrumbItem} />
        <Skeleton className={styles.breadcrumbSeparator} />
        <Skeleton className={styles.breadcrumbItem} />
      </div>

      {/* Header */}
      <Header headerText="Edit snippet"/>

      <Card>
        {/* First row: Title / Language / Tags */}
        <div className={styles.row}>
          <Skeleton className={styles.input} />
          <Skeleton className={styles.input} />
          <Skeleton className={styles.input} />
        </div>

        {/* Description */}
        <div className={styles.rowFull}>
          <Skeleton className={styles.textareaSmall} />
        </div>

        {/* Code */}
        <div className={styles.rowFull}>
          <Skeleton className={styles.textareaLarge} />
        </div>

        {/* Footer (Save button) */}
        <div className={styles.footer}>
          <Skeleton className={styles.button} />
        </div>
      </Card>
    </div>
  );
}
