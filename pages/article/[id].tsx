import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getArticleData } from "../../utils";
import styles from "../../styles/article-page.module.scss";
import { ArticlePageProps } from "../../types";
import Header from "../../components/header";

const ArticlePage = ({ article }: ArticlePageProps): ReactElement => {
  return (
    <div>
      <Header />
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={article.image}
          alt="article"
        />
      </div>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.body}>
        <div
          dangerouslySetInnerHTML={{
            __html: article.body
          }}
        />
      </div>
    </div>
  );
};

export default ArticlePage;

export const getServerSideProps:
  GetServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
      const article = await getArticleData(context?.params?.id);

      return (
        {
          props: {
            article
          }
        }
      );
    } catch (e: any) {
      if (e.response.status === 404) {
        return {
          redirect: {
            destination: "/404"
          }
        };
      }
      return {
        redirect: {
          destination: "/unavailable"
        }
      };
    }
  };
