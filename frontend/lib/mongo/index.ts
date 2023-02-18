import { MongoClient } from "mongodb";

const URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {};

if (!URI) throw new Error("Please add your MOngo DB URI to .env.local");

let client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;
// const globalWithMongoClientPromise = global as typeof globalThis & {
//   _mongoClientPromise: Promise<MongoClient>;
// };
// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (hot module replacement).
//   if (!globalWithMongoClientPromise._mongoClientPromise) {
//     client = new MongoClient(URI!, options);
//     globalWithMongoClientPromise._mongoClientPromise = client.connect();
//   }
//   clientPromise =
//     globalWithMongoClientPromise._mongoClientPromise as Promise<MongoClient>;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(URI!, options);
//   console.log("Start to connect...");
//   clientPromise = client.connect();
// }
// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;

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
}

export default clientPromise;

// import * as mongo from "mongodb";
// import { NextApiRequest } from "next";

// const MONGO_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

// interface Database {
//   client?: mongo.MongoClient;
// }
// export interface DB_Request extends NextApiRequest {
//   db: Database;
// }

// const connectDB = async function () {
//   console.log(`Start Connecting to Mongo DB || ${MONGO_URI}`);
//   const mongoClient: mongo.MongoClient = new mongo.MongoClient(MONGO_URI, {
//     connectTimeoutMS: 5000,
//   });
//   const client = await mongoClient.connect();
//   // const database:mongo.Db = client.db(process.env.)
// };
