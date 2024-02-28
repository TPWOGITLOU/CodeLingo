import { ObjectId } from "mongodb";
import newClient from "./connection";

const databaseName = "CodeLingo";

export interface Topic {
  [key: string]: string;
}

export interface Challenge {
  _id: string;
  topic: string;
  language: string;
  challengeType: string;
  challengeQuestion: string;
  challengeSnippets: { [key: string]: string }[];
  answer: string | {}[];
}

const getTopics = async (language: string) => {
  try {
    const client = newClient();
    const topicsCollection = client.db(databaseName).collection(language);
    const topics: Topic[] = await topicsCollection
      .find({})
      .map((topic: Topic) => ({ ...topic, _id: topic._id.toString() }))
      .toArray();
    if (topics) {
      client.close();
      return topics;
    }
  } catch (error) {
    throw new Error("There was a problem fetching the data");
  }
};

const getQuestions = async (language: string, topic: string) => {
  try {
    const client = newClient();
    const questionsCollection = client.db(databaseName).collection(language);
    const questions: Topic[] = await questionsCollection
      .find({ topic })
      .map((question: Topic) => ({ ...question, _id: question._id.toString() }))
      .toArray();
    if (questions) {
      client.close();
      return questions;
    }
  } catch (error) {
    throw new Error("There was a problem fetching the data");
  }
};

const getChallenge = async (language: string, challenge: string) => {
  try {
    const client = newClient();
    const questionsCollection = client.db(databaseName).collection(language);
    const result = await questionsCollection.findOne({
      _id: new ObjectId(challenge),
    });
    if (result) {
      const question: Challenge = {
        _id: result._id.toString(),
        topic: result.topic,
        language: result.language,
        challengeType: result.challengeType,
        challengeQuestion: result.challengeQuestion,
        challengeSnippets: result.challengeSnippets,
        answer: result.answer,
      };
      client.close();
      return question;
    }
  } catch (error) {
    throw new Error("There was a problem fetching that challenge");
  }
};

const getAllChallengesByLanguage = async (language: string) => {
  const collection: string =
    language === "python" ? "PY-Questions" : "JS-Questions";
  try {
    const client = newClient();
    const questionCollection = client.db(databaseName).collection(collection);
    const questions = await questionCollection
      .find({})
      .map((question) => {
        const data = {
          _id: question._id.toString(),
          topic: question.topic,
        };
        return data;
      })
      .toArray();
    if (questions) {
      client.close();
      return questions;
    }
  } catch (error) {
    throw new Error("There was a problem fetching the data");
  }
};

export { getTopics, getQuestions, getChallenge, getAllChallengesByLanguage };
