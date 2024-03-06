import {
  PythonPrimitivesContent,
  PythonPrintContent,
  PythonVariablesContent,
} from "@/components/PythonLearning";
import {
  JavaScriptPrimitivesContent,
  JavaScriptConsoleContent,
  JavaScriptVariablesContent,
} from "@/components/JavascriptLearning";
import { ReactElement } from "react";

interface LearningTopic {
  topic: string;
  topicSlug: string;
  topicInfo: ReactElement;
}

const javascriptLearning: {
  variables: LearningTopic;
  console: LearningTopic;
  primitives: LearningTopic;
} = {
  variables: {
    topic: "JavaScript Variables",
    topicSlug: "Storing Data With JavaScript Variables",
    topicInfo: JavaScriptPrimitivesContent,
  },
  console: {
    topic: "The JavaScript Console",
    topicSlug: "Displaying Information: The Console",
    topicInfo: JavaScriptConsoleContent,
  },
  primitives: {
    topic: "JavaScript Primitives",
    topicSlug: "Primitive Data Types",
    topicInfo: JavaScriptVariablesContent,
  },
};

interface LearningTopic {
  topic: string;
  topicSlug: string;
  topicInfo: ReactElement;
}

const pythonLearning: {
  variables: LearningTopic;
  print: LearningTopic;
  primitives: LearningTopic;
} = {
  variables: {
    topic: "Python Variables",
    topicSlug: "Storing Data With Python Variables",
    topicInfo: PythonVariablesContent,
  },
  print: {
    topic: "The Python Console",
    topicSlug: "Displaying Information: The Console",
    topicInfo: PythonPrintContent,
  },
  primitives: {
    topic: "Python Primitives",
    topicSlug: "Primitive Data Types",
    topicInfo: PythonPrimitivesContent,
  },
};

//
export { pythonLearning, javascriptLearning };
