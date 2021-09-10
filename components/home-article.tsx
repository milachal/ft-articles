import { ReactElement } from "react";
import { HomeArticleProps } from "../types";

const HomeArticle = ({ title, body }: HomeArticleProps): ReactElement => {
  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
    </div>
  );
};

export default HomeArticle;
