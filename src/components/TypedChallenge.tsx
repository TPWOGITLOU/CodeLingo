"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import CodeEditor from "./CodeEditor";
import OutputWindow from "./OutputWindow";
import {
  Card,
  CardBody,
  Button,
  Image,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";
import { handleCompile, Language } from "../../lib/mongo/judge0/judge-utils";
import { Challenge } from "../../lib/mongo/utils";

const TypedChallenge = (challengeData: Challenge) => {
  const [feedback, setFeedback] = useState<string>(
    "update the code, press run to see the result, and then check your answer"
  );

  const [finished, setFinished] = useState(false);

  let {
    outputDetails,
    setOutputDetails,
    code,
    setCode,
    processing,
    setProcessing,
    theme,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCode(challengeData.challengeSnippets);
  }, []);

  const onChange = (action: unknown, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
    }
  };

  const checkAnswer = () => {
    if (challengeData.answer === atob(outputDetails.stdout).trim()) {
      setFeedback("Well Done! You got that right!");
      setFinished(true);
    } else {
      setFeedback("Not quite correct - take another look at your code");
    }
  };

  const language: string = challengeData.language.toLowerCase();

  const fetchHandleCompile = async () => {
    let fetchLanguage: Language;

    setFeedback("");

    switch (language) {
      case "javascript":
        fetchLanguage = {
          id: 63,
          name: "JavaScript (Node.js 12.14.0)",
          label: "JavaScript (Node.js 12.14.0)",
          value: "javascript",
        };
        break;
      case "python":
        fetchLanguage = {
          id: 71,
          name: "Python (3.8.1)",
          label: "Python (3.8.1)",
          value: "python",
        };
        break;
      default:
        fetchLanguage = {
          id: 63,
          name: "JavaScript (Node.js 12.14.0)",
          label: "JavaScript (Node.js 12.14.0)",
          value: "javascript",
        };
        break;
    }

    return await handleCompile(
      fetchLanguage,
      code,
      setProcessing,
      setOutputDetails
    );
  };

  return (
    <main
      id="typed-container"
      className=" 
        w-[80%]
        min-w-[450px]
        mt-10 ml-auto mr-auto
        box-border

        "
    >
      <div id="grid" className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 mb-5">
        <Card
          id="terminal"
          className="
      col-start-1 lg:row-span-2 md:row-span-1 h-full 
    bg-nice-yellow bg-opacity-50 
      border-8 border-border-colour"
        >
          <CardHeader>
            <p className="text-3xl font-bold">
              {challengeData.language} - {challengeData.topic}
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-xl">Time to start typing...</p>
            <p>
              Update the code below then press &quot;run&quot; to see the result
              and then check your answer.
            </p>

            <div
              id="code-card-container"
              className="bg-black mt-5 pt-[10px] h-full rounded"
            >
              <CodeEditor
                code={code}
                onChange={onChange}
                language={language}
                theme={theme}
                height="10rem"
              />
            </div>
          </CardBody>
        </Card>

        <Card
          id="question"
          className="

        border-8 border-border-colour 
        bg-nice-yellow bg-opacity-50"
        >
          <CardBody className="p-5">
            <p className="text-xl">{challengeData.challengeQuestion}</p>
            <Image
              src="/character1.png"
              alt="2d pixel character with her arms in the air"
              className="p-0 h-[100%]"
            />
          </CardBody>
        </Card>
        <Card
          id="output"
          className="h-full p-5 
          border-8 border-border-colour bg-nice-yellow bg-opacity-50"
        >
          <OutputWindow outputDetails={outputDetails} feedback={feedback} />
          <div id="buttons" className="mt-3 flex flex-row justify-end gap-5">
            <Button
              onClick={fetchHandleCompile}
              disabled={!code}
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              {processing ? "Loading ..." : "Run"}
            </Button>
            <Button
              onClick={checkAnswer}
              disabled={!code}
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Check Answer
            </Button>
          </div>
        </Card>
      </div>
      <ChallengeFooter finished={finished} />
    </main>
  );
};

export default TypedChallenge;
