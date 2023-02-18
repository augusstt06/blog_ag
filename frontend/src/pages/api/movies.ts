import type { NextApiRequest, NextApiResponse } from "next";
// // import { getMovies } from "../../../lib/mongo/movies";

// export default async function hanlder(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const { movies, error } = await getMovies();
//       if (error) throw new Error(error);
//       return res.status(200).json({ movies });
//     } catch (error) {
//       return res.status(500).json({ error });
//     }
//   }
//   res.setHeader("Allow", ["GET"]);
//   res.status(425).end(`Method ${req.method} is not allowed`);
// }

import clientPromise from "../../../lib/mongo";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    res.json(movies);
  } catch (err) {
    console.error(err);
  }
}
