/* eslint-disable no-return-await */
import { ResponseType } from "axios";
import instance from "./axiosInstance";
import { GetArticleResponse, QueryContext } from "./types";

export const getArticleData = async (id: string): Promise<GetArticleResponse> => {
  const response = await instance.get(
    `enrichedcontent/${id}?apiKey=${process.env.FT_API_KEY}`
  );

  return {
    meta: response.data.annotations?.[0]?.prefLabel,
    title: response.data.title,
    standfirst: response.data.standfirst,
    body: response.data?.bodyXML,
    image: response.data.mainImage?.members?.[0]?.binaryUrl,
    id: response.data.id
  };
};

export const getSearchSuggestionsData = async (
  queryString: string, queryContext: QueryContext
): Promise<ResponseType> => {
  const response = await instance.post(
    `content/search/v1?apiKey=${process.env.FT_API_KEY}`, {
      queryString,
      queryContext
    }
  );
  return response.data.results[0].results || [];
};

export const getArticlesData = async (
  startSlice: number | undefined, endSlice: number | undefined, articleIdsArr: string[]
): Promise<GetArticleResponse[]> => {
  return await Promise.all(
    articleIdsArr.slice(startSlice, endSlice).map(getArticleData)
  );
};
