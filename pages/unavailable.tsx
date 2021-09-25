import { ReactElement } from "react";
import styles from "../styles/unavailable-error.module.scss";

const PageUnavailable = (): ReactElement => {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Temporary unavailable</h2>
      <p className={styles.errorMessage}>
        Sorry, the page you&apos;re trying to reach is currentlly unavailable.
      </p>
      <p className={styles.errorMessage}>Please, try again later.</p>
    </div>
  );
};

export default PageUnavailable;
