/* eslint-disable consistent-return */

import { NextApiRequest, NextApiResponse } from "next";
import { SuggestionResult } from "../../types";
import { getArticlesData, getSearchSuggestionsData } from "./utils";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const { body } = req;

  if (body.queryString) {
    try {
      const searchSuggestionsData = await getSearchSuggestionsData(
        body.queryString, body.queryContext
      );
      const suggestionsIds = searchSuggestionsData.data.results[0].results || [];
      const suggestionsIdsArr = suggestionsIds.map((suggestion: SuggestionResult) => {
        return suggestion.id;
      });

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
};

export default handler;
