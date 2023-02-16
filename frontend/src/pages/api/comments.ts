import type { NextApiRequest, NextApiResponse } from "next";
import { getPostings } from "@lib/mongo/comments";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { comments, error } = await getPostings();
      if (error) throw new Error(error);
      return res.status(200).json({ comments });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed`);
}
