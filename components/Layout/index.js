import * as React from "react";
import Navigation from "../Navigation";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.app}>
    <Navigation />
    <div className={styles.pageContent}>{children}</div>
  </div>
);

export default Layout;
