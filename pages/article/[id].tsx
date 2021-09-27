import React, { ReactElement } from "react";
import {
  GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult
} from "next";
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
  GetServerSideProps<ArticlePageProps> = async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<ArticlePageProps>> => {
    try {
      const { id } = context.query;
      const article = await getArticleData(id as string);

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
            destination: "/404",
            permanent: true
          }
        };
      }
      return {
        redirect: {
          destination: "/unavailable",
          permanent: true
        }
      };
    }
  };
