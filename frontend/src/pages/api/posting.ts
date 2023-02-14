import type { NextApiRequest, NextApiResponse } from "next";
// type Data = {
//   post: string;
// };
export default function hanlder(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Post method is allowed!!" });
  }
  res.status(200).json({ post: "포스팅 테스트" });
}
