import clientPromise from ".";

let client: any;
let db: any;
let movies: any;

async function init() {
  if (db) return;

  try {
    client = await clientPromise;
    db = await client.db();
    movies = await db.collection("movies");
  } catch (err) {
    throw new Error("Fail to connect database");
  }
}

(async () => {
  await init();
})();

export async function getMovies() {
  try {
    if (!movies) await init();
    const result = await movies
      .find({})
      .limit(20)
      // .map((data: any) => ({
      //   ...data,
      //   name: data.name.toString(),
      //   email: data.email.toString(),
      // }))
      .map((user: any) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { movies: result };
  } catch (err) {
    return { error: "Fail to fetch movies!" };
  }
}
