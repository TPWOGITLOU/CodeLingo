import { MongoClient } from "mongodb";
const URI = process.env.MONGODB_URI!;

if (!URI) throw new Error("Unable to find the environment variable");

let client = new MongoClient(URI);
if (!client) client = new MongoClient(URI);

export default client;
