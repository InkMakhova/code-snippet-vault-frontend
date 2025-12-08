import { Link } from "@tanstack/react-router";
import styles from "./Breadcrumbs.module.css";
import HomeIcon from "../../assets/home-icon.svg?react";

type BreadcrumbsProps = {
  snippetTitle: string;
  snippetLanguage: string;
};

export function Breadcrumbs({ snippetTitle, snippetLanguage }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <Link to="/" className={styles.home}>
        <HomeIcon width={20} height={20} className={styles.homeIcon} />
        Snippets vault
      </Link>
      <span className={styles.separator}>›</span>
      <span className={styles.current}>
        {snippetTitle} ({snippetLanguage})
      </span>
    </nav>
  );
}
