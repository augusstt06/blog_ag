import type { NextApiRequest, NextApiResponse } from "next";
import { getPostings } from "@lib/mongo/posting";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { postings, error } = await getPostings();
      if (error) throw new Error(error);
      return res.status(200).json({ postings });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed`);
  // if (req.method !== "POST") {
  //   res.status(405).json({ message: "Post method is allowed!!" });
  // }
  // res.status(200).json({ post: "포스팅 테스트" });
}
