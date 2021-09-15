/* eslint-disable consistent-return */

import { NextApiRequest, NextApiResponse } from "next";
import instance from "../../axiosInstance";
import { SuggestionResult } from "../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const { method, body } = req;

  if (method === "POST") {
    if (body.queryString) {
      try {
        const searchData = await instance.post(
          `content/search/v1?apiKey=${process.env.FT_API_KEY}`, {
            queryString: body.queryString,
            queryContext: body.queryContext
          }
        );

        const suggestionsIds = searchData.data.results[0].results || [];
        const suggestionsIdsArr = suggestionsIds.map((suggestion: SuggestionResult) => {
          return suggestion.id;
        });

        const getArticlesData = async (id: string) => {
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

        const articles = await Promise.all(
          suggestionsIdsArr.slice(0, 9).map(getArticlesData)
        );

        return res.json({
          articles
        });
      } catch (e) {
        console.log(e);
        res.statusCode = 500;
        return res.json({
          Error: "Something went wrong."
        });
      }
    } else {
      res.statusCode = 204;
      return res.json({
        articles: []
      });
    }
  }
};

export default handler;
