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
      // req.body 객체 형태 잘 조정 하기
      await db.collection("post").insertOne(req.body);
      res.status(200).json("db 등록 완료");
    } catch (err) {
      console.log(err);
      res.status(500).json("요청 실패");
    }
  }
}
