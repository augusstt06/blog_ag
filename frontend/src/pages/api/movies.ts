import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongo";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");
      const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();
      res.status(200).json(movies);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(425).end(`Method ${req.method} is not allowed`);
  }
}
