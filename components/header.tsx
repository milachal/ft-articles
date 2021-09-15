import React, { ReactElement } from "react";
import styles from "../styles/header.module.scss";
import Search from "./search";

const Header = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo:brand-ft-masthead?format=svg&source=page-kit-layout&tint=%2333302E%2C%2333302E"
          alt="financial-times-logo"
        />
      </div>
    </div>
  );
};

export default Header;
