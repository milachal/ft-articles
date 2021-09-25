import { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/error-page.module.scss";

const Custom404 = (): ReactElement => {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Page Not Found </h2>
      <p>Sorry, we could not find the page you were looking for.</p>
      <p>
        Go back&nbsp;
        <Link href="/">
          <a className={styles.link}>home</a>
        </Link>
      </p>
    </div>
  );
};

export default Custom404;
