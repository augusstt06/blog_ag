import clientPromise from ".";

let client: any;
let db: any;
let postings: any;

async function init() {
  if (db) return;

  try {
    client = await clientPromise;
    db = await client.db();
    postings = await db.collection("postings");
  } catch (err) {
    throw new Error("Fail to connect database");
  }
}

(async () => {
  await init();
})();

export async function getPostings() {
  try {
    if (!postings) await init();
    const result = await postings
      .find({})
      .limit(20)
      .map((user: any) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { postings: result };
  } catch (err) {
    return { error: "Fail to fetch postings!" };
  }
}
