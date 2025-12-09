import styles from "./Footer.module.css";
import GitHubIcon from "../../assets/github-icon.svg?react";
import { GITHUB_REPO_URL } from "../../constants.ts";
import { Link } from "../../components/Link/Link.tsx";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Snippet Vault</span>
      {" "}
      <Link
        href={GITHUB_REPO_URL}
        icon={<GitHubIcon aria-hidden />}
      />
    </footer>
  );
}
