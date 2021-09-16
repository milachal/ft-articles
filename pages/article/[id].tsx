import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import instance from "../../axiosInstance";
import styles from "../../styles/article-page.module.scss";
import { ArticlePageProps } from "../../types";
import Header from "../../components/header";

const ArticlePage = ({ article }: ArticlePageProps): ReactElement => {
  console.log(article.body);
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
    const response = await instance.get(
      `enrichedcontent/${context.params.id}?apiKey=${process.env.FT_API_KEY}`
    );

    return (
      {
        props: {
          article: {
            meta: response.data.annotations?.[0]?.prefLabel,
            title: response.data.title,
            standfirst: response.data.standfirst,
            body: response.data.bodyXML,
            image: response.data.mainImage.members?.[0]?.binaryUrl,
            id: response.data.id
          }
        }
      }
    );
  };
