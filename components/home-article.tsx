import { ReactElement } from "react";
import styles from "../styles/HomeArticle.module.scss";
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
      <div className={styles.meta}>{meta}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.standfirst}>{standfirst}</div>
    </div>
  );
};

export default HomeArticle;
