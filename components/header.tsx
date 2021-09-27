import React, { ReactElement } from "react";
import Link from "next/link";
import Search from "./searchbar/search";

const Header = (): ReactElement => {
  const classNamePrefix = "header-container";

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__search`}>
        <Search />
      </div>
      <Link href="/">
        <a>
          <div className={`${classNamePrefix}__logo`}>
            {/* eslint-disable max-len */}
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
