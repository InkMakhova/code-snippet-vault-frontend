import styles from "./SnippetsPageSkeleton.module.css";
import { Skeleton } from "../../../components/Skeleton/Skeleton";

export function TableSkeleton() {
  return (
    <>
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
    </>
  );
}
