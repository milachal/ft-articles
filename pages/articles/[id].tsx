import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import parse from "html-react-parser";
import instance from "../../axiosInstance";
import { ArticlePageProps } from "../../types";
import Header from "../../components/header";

const ArticlePage = ({ article }: ArticlePageProps): ReactElement => {
  return (
    <div>
      <Header />
      <div>{article.title}</div>
      <div>
        <img
          src={article.image}
          alt="article"
        />
      </div>
      <div>{parse(article.body)}</div>
    </div>
  );
};

export default ArticlePage;

/* eslint-disable consistent-return */
export const getServerSideProps:
  GetServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
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
    } catch (e) {
      console.log(e);
    }
  };
