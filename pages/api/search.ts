/* eslint-disable consistent-return */

import { NextApiRequest, NextApiResponse } from "next";
import { SuggestionResult } from "../../types";
import { getSearchSuggestionsData, getArticlesData } from "../../utils";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const { body } = req;

  if (body.queryString) {
    try {
      const suggestionsData = await getSearchSuggestionsData(
        body.queryString, body.queryContext
      );

      const suggestionsIdsArr = suggestionsData.map((suggestion: SuggestionResult) => {
        return suggestion.id;
      });

      const articles = await getArticlesData(0, 9, suggestionsIdsArr);
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
