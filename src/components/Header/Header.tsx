import styles from "./Header.module.css";
import GitHubIcon from "../../assets/github-icon.svg?react";
import { GITHUB_REPO_URL } from "../../constants.ts";
import { Link } from "../Link/Link.tsx";

export function Header({headerText}: {headerText: string}) {
  return (
    <div className={styles['header-container']}>
      <h1 className={styles['header-title']}>
        {headerText}
      </h1>
      <Link
        href={GITHUB_REPO_URL}
        text="GitHub repository"
        icon={<GitHubIcon aria-hidden />}
      />
    </div>
  )
}
