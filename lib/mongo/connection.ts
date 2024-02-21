import { MongoClient } from "mongodb";
import "dotenv/config";
const URI = process.env.MONGODB_URI!;

if (!URI) throw new Error("Please add your Mongo URI to a .env file");

let client = new MongoClient(URI);
if (!client) client = new MongoClient(URI);

export default client;
