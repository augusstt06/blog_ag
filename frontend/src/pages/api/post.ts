import { NextApiResponse, NextApiRequest } from "next";
import clientPromise from "@lib/mongo";

export default async function postApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return;
  } catch (err) {
    console.log(err);
  }
}
