import { Link } from 'react-aria-components';
import styles from "./Header.module.css";
import GitHubIcon from "../../assets/github-icon.svg?react";
import { GITHUB_REPO_URL } from "../../constants.ts";

export function Header({headerText}: {headerText: string}) {
  return (
    <div className={styles['header-container']}>
      <h1 className={styles['header-title']}>
        {headerText}
      </h1>
      <Link
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['github-link']}
      >
        <GitHubIcon aria-hidden />
        Project repository on GitHub
      </Link>
    </div>
  )
}
