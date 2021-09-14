import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.scss";
import instance from "../axiosInstance";
import Header from "../components/header";
import HomeArticle from "../components/home-article";
import { HomeProps, GetArticleResponse } from "../types";

const Home = ({ articles }: HomeProps): ReactElement => {
  return (
    <>
      <Header />
      <div className={styles.homePageArticleContainer}>
        {articles.map((article: GetArticleResponse) => {
          return (
            <span key={article.id}>
              <HomeArticle
                image={article.image}
                meta={article.meta}
                title={article.title}
                standfirst={article.standfirst}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const articleIdsArr: string[] = [
    "14df1206-bdc6-4f1c-870a-e12748e95c31", "737dd635-dba2-49d7-bcdd-34f467b218ea",
    "4935b205-8344-465a-8edf-dc23ec990302", "8cef8c70-5d02-4762-9100-2d92d0c761a0",
    "4ddf4b5b-3267-41b2-ad04-8f4e77783a5c", "dd164b26-90ad-4466-9e47-886224384533",
    "36cdd5d2-18af-4745-88e8-b101fd4cab3f", "a2901ce8-5eb7-4633-b89c-cbdf5b386938",
    "ac5e5ef8-bccb-482b-9f8d-0dab5cac6f9a", "1db3d119-ac9f-4948-b43b-29bb136eb2d5"

  ];

  const getArticlesData = async (id: string) => {
    const response = await instance.get(
      `enrichedcontent/${id}?apiKey=${process.env.FT_API_KEY}`
    );
    return {
      meta: response.data.annotations?.[0]?.prefLabel,
      title: response.data.title,
      standfirst: response.data.standfirst,
      image: response.data.mainImage.members?.[0]?.binaryUrl,
      id: response.data.id
    };
  };

  const articles = await Promise.all(
    articleIdsArr.map(getArticlesData)
  );

  return {
    props: {
      articles
    }
  };
};
