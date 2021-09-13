/* eslint-disable consistent-return */

import { NextApiRequest, NextApiResponse } from "next";
import instance from "../../axiosInstance";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const { method, body } = req;
  if (method === "POST") {
    if (body.queryString) {
      try {
        const response = await instance.post(
          `content/search/v1?apiKey=${process.env.FT_API_KEY}`, {
            queryString: body.queryString,
            queryContext: body.queryContext
          }
        );
        return res.json({
          data: response.data
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
      res.json({ }); // how to resolve this when deleting query?
    }
  }
};

export default handler;
