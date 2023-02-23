import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@lib/mongo";

export default async function getPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q_title = req.query;

  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("blog_ag");

      const post = await db
        .collection("post")
        .find({ title: `${q_title.title}` })
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();

      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(425).end(`Method ${req.method} is not allowed`);
  }
}
