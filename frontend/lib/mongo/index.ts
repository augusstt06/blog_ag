import { MongoClient } from "mongodb";

const URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {};

if (!URI) throw new Error("Please add your MOngo DB URI to .env.local");

let client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV !== "production") {
  let globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(URI);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }

  clientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
  console.log("Start to connect....");
  client = new MongoClient(URI);
  clientPromise = client.connect();
  console.log("Mongo Db connection successful!");
}

export default clientPromise;
