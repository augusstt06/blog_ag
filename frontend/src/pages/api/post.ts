import { NextApiResponse, NextApiRequest } from "next";
import clientPromise from "@lib/mongo";

export default async function postApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("blog_ag");
  if (req.method === "GET") {
    try {
      const post = await db
        .collection("post")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  } else if (req.method === "POST") {
    try {
      console.log("db에 넣을 객체 : ", req.body);
      //   const post = await db.collection("post").insertOne(req.body).
    } catch (err) {
      console.log(err);
    }
  }
}
