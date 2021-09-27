import { ReactElement } from "react";

const PageUnavailable = (): ReactElement => {
  const classNamePrefix = "error-page-container";

  return (
    <div className={classNamePrefix}>
      <h2 className={`${classNamePrefix}__error-title`}>Temporary unavailable</h2>
      <p className={`${classNamePrefix}__error-message`}>
        Sorry, the page you&apos;re trying to reach is currentlly unavailable.
      </p>
      <p className={`${classNamePrefix}__error-message`}>Please, try again later.</p>
    </div>
  );
};

export default PageUnavailable;
