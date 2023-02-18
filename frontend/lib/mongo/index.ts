// import { MongoClient } from "mongodb";

// const URI = process.env.NEXT_PUBLIC_MONGODB_URI;
// const options = {};

// if (!URI) throw new Error("Please add your MOngo DB URI to .env.local");

// let client = new MongoClient(URI, options);
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV !== "production") {
//   let globalWithMongoClientPromise = global as typeof globalThis & {
//     _mongoClientPromise: Promise<MongoClient>;
//   };

//   if (!globalWithMongoClientPromise._mongoClientPromise) {
//     client = new MongoClient(URI);
//     globalWithMongoClientPromise._mongoClientPromise = client.connect();
//   }

//   clientPromise = globalWithMongoClientPromise._mongoClientPromise;
// } else {
//   client = new MongoClient(URI);
//   clientPromise = client.connect();
// }

// export default clientPromise;

//
import * as mongo from "mongodb";
import { NextApiRequest } from "next";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

interface Database {
  client?: mongo.MongoClient;
}
export interface DB_Request extends NextApiRequest {
  db: Database;
}

const connectDB = async function () {
  console.log(`Start Connecting to Mongo DB || ${MONGO_URI}`);
  const mongoClient: mongo.MongoClient = new mongo.MongoClient(MONGO_URI, {
    connectTimeoutMS: 5000,
  });
  const client = await mongoClient.connect();
  // const database:mongo.Db = client.db(process.env.)
};
