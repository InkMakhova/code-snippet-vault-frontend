import { Card } from "../../../components/Card/Card";
import { Skeleton } from "../../../components/Skeleton/Skeleton";
import styles from "./SnippetsPageSkeleton.module.css";

export function SnippetsPageSkeleton() {
  return (
    <>
      {/* Header skeleton */}
      <div className={styles.header}>
        <Skeleton className={styles.headerBar} />
      </div>

      <Card>
        {/* Search + Create button row */}
        <div className={styles.menu}>
          <Skeleton className={styles.search} />
          <Skeleton className={styles.button} />
        </div>

        {/* Table header skeleton */}
        <div className={styles.tableHeader}>
          {Array.from({ length: 7 }).map((_, idx) => (
            <Skeleton key={idx} className={styles.tableHeaderCell} />
          ))}
        </div>

        {/* Table rows skeleton */}
        <div className={styles.tableBody}>
          {Array.from({ length: 3 }).map((_, row) => (
            <div key={row} className={styles.row}>
              {Array.from({ length: 7 }).map((_, col) => (
                <Skeleton key={col} className={styles.cell} />
              ))}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
