import type { NextApiRequest, NextApiResponse } from "next";

export default function hanlder(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json("테스트");
}
