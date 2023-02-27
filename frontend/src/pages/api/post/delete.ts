import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@lib/mongo";
import { ObjectId } from "mongodb";

export default async function deleteApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("blog_ag");

  if (req.method === "DELETE") {
    try {
      await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body[0]._id) });
      res.status(200).json("삭제 완료");
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(425).end(`Method ${req.method} is not allowed`);
  }
}
