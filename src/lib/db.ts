import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    let uri: string;

    if (process.env.NODE_ENV === "production") {
      if (!MONGODB_URI) {
        throw new Error(
          "Please define the MONGODB_URI environment variable for production."
        );
      }
      uri = MONGODB_URI;
    } else {
      // In development, use the in-memory server
      const mongod = await MongoMemoryServer.create();
      uri = mongod.getUri();
    }

    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
