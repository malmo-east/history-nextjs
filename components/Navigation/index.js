/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Link from "next/link";
import { useHistoryContext } from "../../hooks/useRouteHistory";
import GoBackLink from "../GoBackLink";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { history } = useHistoryContext();

  return (
    <>
      <nav className={styles.navbar}>
        {[
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
          { title: "Example", url: "/example" },
          { title: "NoLayout", url: "/nolayout" }
        ].map(({ title, url }) => (
          <Link key={title} href={url} passHref>
            <a className={styles.link}>{title}</a>
          </Link>
        ))}
      </nav>
      <GoBackLink />
      <div className={styles.history}>
        <h4 style={{ marginBottom: 0 }}>History</h4>
        <pre className={styles.code}>
          <code>{JSON.stringify(history, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Navigation;
