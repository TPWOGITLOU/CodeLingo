import client from "./connection";

interface Topic {
  [key: string]: string | object;
}

const getTopics = async () => {
  try {
    const topicsCollection = client.db("CodeLingo").collection("JS-Topics");
    const topics: Topic[] = await topicsCollection
      .find({})
      .map((topic: Topic) => ({ ...topic, _id: topic._id.toString() }))
      .toArray();
    if (topics) {
      return topics;
    }
  } catch (error) {
    throw new Error("There was a problem fetching the data");
  }
};

export { getTopics };
