import { MongoClient } from "mongodb";
const URI = process.env.MONGODB_URI!;

if (!URI) throw new Error("Unable to find the environment variable");

const newClient = () => new MongoClient(URI);

export default newClient;
