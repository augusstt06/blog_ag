import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  post: string;
};
export default function hanlder(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ post: "포스팅 테스트" });
}
