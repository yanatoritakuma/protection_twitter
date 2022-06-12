import type { NextApiRequest, NextApiResponse } from "next";
import Twitter from "twitter";
import dotenv from "dotenv";

dotenv.config();

const client = new Twitter({
  consumer_key: process.env.consumer_key ? process.env.consumer_key : "",
  consumer_secret: process.env.consumer_secret
    ? process.env.consumer_secret
    : "",
  access_token_key: process.env.access_token_key
    ? process.env.access_token_key
    : "",
  access_token_secret: process.env.access_token_secret
    ? process.env.access_token_secret
    : "",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;

  if (!q) {
    return res.status(200).json([]);
  }

  const data = await (() => {
    return new Promise((resolve) => {
      client.get("search/tweets", { q, count: 2 }, function (_error, tweets) {
        console.log("tweets!!!", tweets);
        resolve(tweets);
      });
    });
  })();
  const statuses = (
    data as {
      statuses: {
        text: string;
      }[];
    }
  ).statuses;

  const param: {
    text: string;
  }[] = [];

  if (statuses) {
    statuses.forEach((tweet) => {
      param.push({
        text: tweet.text,
      });
    });
  }

  return res.status(200).json(param);
};
