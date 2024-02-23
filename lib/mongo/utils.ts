import { ObjectId } from "mongodb";
import client from "./connection";

const databaseName = "CodeLingo"

export interface Topic {
  [key: string]: string ;
}

const getTopics = async (language: string) => {
  try {
    const topicsCollection = client.db(databaseName).collection(language);
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
    const questionsCollection = client.db(databaseName).collection(language);
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

const getChallenge = async (language: string, challenge: string) => {
  try {
    const questionsCollection = client.db(databaseName).collection(language);
    const question = await questionsCollection
      .findOne({_id: new ObjectId(challenge)})
    if (question) {
      return question;
    }
  } catch (error) {
    throw new Error("There was a problem fetching that challenge");
  }
};


export { getTopics, getQuestions, getChallenge };
