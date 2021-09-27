import { ReactElement } from "react";
import { HomeArticleProps } from "../types";

const HomeArticle = ({
  meta, title, image, standfirst
}: HomeArticleProps): ReactElement => {
  const classNamePrefix = "home-article-container";

  return (
    <div className={classNamePrefix}>
      <img
        className={`${classNamePrefix}__image`}
        src={image}
        alt="article"
      />
      <div
        className={`${classNamePrefix}__meta`}
        data-testid="meta"
      >
        {meta}
      </div>
      <div
        className={`${classNamePrefix}__title`}
        data-testid="title"
      >
        {title}
      </div>
      <div
        className={`${classNamePrefix}__standfirst`}
        data-testid="standfirst"
      >
        {standfirst}
      </div>
    </div>
  );
};

export default HomeArticle;
