import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";
import Search from "./searchbar/search";

const Header = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <Link href="/">
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a>
          <div className={styles.logoContainer}>
            <img
              src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo:brand-ft-masthead?format=svg&source=page-kit-layout&tint=%2333302E%2C%2333302E"
              alt="financial-times-logo"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Header;
