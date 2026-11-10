// import "dotenv/config";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI, {
   serverSelectionTimeoutMS: 10000,
});

try {
   await client.connect();

   console.log("MongoDB connected successfully!");

   const db = client.db("demo-auth");
   console.log(await db.command({ ping: 1 }));
} catch (error) {
   console.error("MongoDB connection failed:", error);
} finally {
   await client.close();
}
