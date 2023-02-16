import clientPromise from ".";

let client: any;
let db: any;
let comments: any;

async function init() {
  if (db) return;

  try {
    client = await clientPromise;
    db = await client.db();
    comments = await db.collection("comments");
  } catch (err) {
    throw new Error("Fail to connect database");
  }
}

(async () => {
  await init();
})();

export async function getPostings() {
  try {
    if (!comments) await init();
    const result = await comments
      .find({})
      .limit(20)
      // .map((user: any) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { comments: result };
  } catch (err) {
    return { error: "Fail to fetch comments!" };
  }
}
