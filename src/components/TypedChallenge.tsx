"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext, OutputDetails } from "../../contexts/globalContext";
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
import Link from "next/link";
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
    if (outputDetails && "stdout" in outputDetails) {
      if (challengeData.answer === atob(outputDetails.stdout).trim()) {
        setFeedback("Well Done! You got that right!");
        setFinished(true);
      } else {
        setFeedback("Not quite correct - take another look at your code");
      }
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
      code as string,
      setProcessing,
      setOutputDetails
    );
  };

  return (
    <main
      id="typed-container"
      className=" 
        w-[80%] min-w-[450px] max-w-[1440px]
        mt-10 mx-auto
        box-border"
    >
      <div
        id="grid"
        className="grid max-w-[80%]
        mx-auto lg:grid-cols-2 md:grid-cols-1 gap-5 mb-5"
      >
        <Card
          id="terminal"
          className="
      col-start-1 lg:row-span-2 md:row-span-1 h-full 
    bg-nice-yellow bg-opacity-50 border-8 border-border-colour"
        >
          <CardHeader>
            <p className="text-3xl font-bold">
              {challengeData.language} -{" "}
              {`${challengeData.topic
                .charAt(0)
                .toUpperCase()}${challengeData.topic.slice(1)}`}
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-xl">
              When we write code, we use an editor like this. Update the code
              below then press &quot;run&quot; to see the result and then check
              your answer.
            </p>

            <div
              id="code-card-container"
              className="bg-code-editor-dark mt-5 pt-[10px] h-full rounded"
            >
              <CodeEditor
                code={code as string}
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
          bg-opacity-0 shadow-none p-0"
        >
          <CardBody className="flex w-full flex-row place-content-end p-5 overflow-hidden">
            <div
              id="speech-bubble"
              className="bg-white
            border border-white 
            rounded-r-full
            rounded-tl-full
            rounded-bl-0
            text-center
            w-[90%]   
            h-[75%]
            px-12 py-6
            mb-[35px]
            dark:text-header
            overflow-x-hidden     
            overflow-y-auto   
            "
            >
              <p className="text-xl">
                Time to start typing...
                <br />
                {challengeData.challengeQuestion}.
              </p>
            </div>
            <div className="absolute bottom-0 left-2">
              <Image
                src="/character1.png"
                alt="2d pixel character with her arms in the air"
                className="mb-[-5px] h-[100%]"
              />
            </div>
            <div className="absolute bottom-5 right-5">
              <Link
                href={`../../learning/${language}/${challengeData.topic}/learning`}
              >
                <Button
                  radius="full"
                  size="sm"
                  color="secondary"
                  variant="bordered"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
        <Card
          id="output"
          className="h-full p-5 
          border-8 border-border-colour bg-nice-yellow bg-opacity-50"
        >
          <OutputWindow
            outputDetails={outputDetails as OutputDetails}
            feedback={feedback}
          />
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
              disabled={!outputDetails}
              radius="full"
              className={
                outputDetails
                  ? "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  : "bg-slate-500"
              }
            >
              Check Answer
            </Button>
          </div>
        </Card>
      </div>
      <div className="max-w-[80%] mx-auto">
        <ChallengeFooter finished={finished} />
      </div>
    </main>
  );
};

export default TypedChallenge;
