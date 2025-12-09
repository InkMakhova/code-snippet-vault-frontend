import styles from "./Header.module.css";
import HomeIcon from "../../assets/home-icon.svg?react";
import GitHubIcon from "../../assets/github-icon.svg?react";
import { GITHUB_REPO_URL } from "../../constants.ts";
import { Link } from "../Link/Link.tsx";

type Props = {
  headerText: string;
  isHome?: boolean;
}
export function Header({
  headerText,
  isHome
}: Props) {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header']}>
        {isHome ? (<HomeIcon width={26} height={26} />) : null}
        <h1 className={styles['header-title']}>
          {headerText}
        </h1>
      </div>
      <Link
        href={GITHUB_REPO_URL}
        text="GitHub repository"
        icon={<GitHubIcon aria-hidden />}
      />
    </div>
  )
}
