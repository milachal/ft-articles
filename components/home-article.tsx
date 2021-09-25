import { ReactElement } from "react";
import styles from "../styles/home-article.module.scss";
import { HomeArticleProps } from "../types";

const HomeArticle = ({
  meta, title, image, standfirst
}: HomeArticleProps): ReactElement => {
  return (
    <div className={styles.homeArticleContainer}>
      <img
        className={styles.image}
        src={image}
        alt="article"
      />
      <div className={styles.meta} data-testid="meta">{meta}</div>
      <div className={styles.title} data-testid="title">{title}</div>
      <div className={styles.standfirst} data-testid="standfirst">{standfirst}</div>
    </div>
  );
};

export default HomeArticle;
