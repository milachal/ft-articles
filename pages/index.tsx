import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import instance from "../axiosInstance";
import HomeArticle from "../components/home-article";
import { HomeProps } from "../types";

const Home = ({ data }: HomeProps): ReactElement => {
  return (
    <div>
      <HomeArticle
        title={data.title}
        body={data.standfirst}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const articleId = "14df1206-bdc6-4f1c-870a-e12748e95c31";
  const res = await instance.get(
    `${articleId}?apiKey=${process.env.FT_API_KEY}`
  );

  return {
    props: {
      data: res.data
    }
  };
};
