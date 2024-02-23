import client from "./connection";

export interface Topic {
  [key: string]: string ;
}

const getTopics = async (language: string) => {
  try {
    const topicsCollection = client.db("CodeLingo").collection(language);
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

const getQuestions = async (language: string, topic: string) => {
  try {
    const questionsCollection = client.db("CodeLingo").collection(language);
    const questions: Topic[] = await questionsCollection
      .find({topic})
      .map((question: Topic) => ({ ...question, _id: question._id.toString() }))
      .toArray();
    if (questions) {
      return questions;
    }
  } catch (error) {
    throw new Error("There was a problem fetching the data");
  }
};

export { getTopics, getQuestions };
