/* eslint-disable no-return-await */
import { ResponseType } from "axios";
import instance from "../../axiosInstance";
import { GetArticleResponse, QueryContext } from "../../types";

export const getArticlesData = async (id: string): Promise<GetArticleResponse> => {
  const response = await instance.get(
    `enrichedcontent/${id}?apiKey=${process.env.FT_API_KEY}`
  );

  return {
    meta: response.data.annotations?.[0]?.prefLabel,
    title: response.data.title,
    standfirst: response.data.standfirst,
    image: response.data.mainImage?.members?.[0]?.binaryUrl,
    id: response.data.id
  };
};

export const getSearchSuggestionsData = async (
  queryString: string, queryContext: QueryContext
): Promise<ResponseType> => {
  return await instance.post(
    `content/search/v1?apiKey=${process.env.FT_API_KEY}`, {
      queryString,
      queryContext
    }
  );
};
