import { ReactElement } from "react";
import Link from "next/link";

const Custom404 = (): ReactElement => {
  const classNamePrefix = "error-page-container";

  return (
    <div className={classNamePrefix}>
      <h2 className={`${classNamePrefix}__error-title`}>Page Not Found </h2>
      <p className={`${classNamePrefix}__error-message`}>
        Sorry, we could not find the page you were looking for.
      </p>
      <p>
        Go back&nbsp;
        <Link href="/">
          <a className={`${classNamePrefix}__link`}>home</a>
        </Link>
      </p>
    </div>
  );
};

export default Custom404;
