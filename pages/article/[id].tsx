import React, { ReactElement } from "react";
import {
  GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult
} from "next";
import { getArticleData } from "../../utils";
import { ArticlePageProps } from "../../types";
import Header from "../../components/header";

const ArticlePage = ({ article }: ArticlePageProps): ReactElement => {
  const classNamePrefix = "article-page-container";
  return (
    <div className={classNamePrefix}>
      <Header />
      <div className={`${classNamePrefix}__imageContainer`}>
        <img
          className={`${classNamePrefix}__image`}
          src={article.image}
          alt="article"
        />
      </div>
      <div className={`${classNamePrefix}__title`}>{article.title}</div>
      <div className={`${classNamePrefix}__body`}>
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
