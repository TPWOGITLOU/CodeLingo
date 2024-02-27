"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import CodeEditor from "./CodeEditor";
import OutputWindow from "./OutputWindow";
import { Card, CardBody, Button, Image, CardHeader } from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";
import { handleCompile, Language } from "../../lib/mongo/judge0/judge-utils";
import { challenge } from "../../lib/mongo/utils";

interface Test {
  language: string
}

const TypedChallenge = (challengeData: challenge) => {
  const [feedback, setFeedback] = useState<{ feedback: string }>("");

  let {
    outputDetails,
    setOutputDetails,
    code,
    setCode,
    processing,
    setProcessing,
    theme,
  } = useContext(GlobalContext);


//   const hardCodedChallenge: challenge[] = [
//     {
//       _id: "123456",
//       topic: "primitives",
//       language: "javascript",
//       challengeType: "typed",
//       challengeQuestion:
//         "Change the code so that the data type of variable 'a' is changed from a string data type to a number data type",
//       challengeSnippets: `
// print()
// `,
//       answer: "Coding Rocks!",
//     },
//   ];

console.log(challengeData, "challenge snippet")

  useEffect(() => {
    setCode(challengeData.challengeSnippets.trim());
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
    } else {
      setFeedback("Not quite correct - take another look at your code");
    }
  };

  const languageParams: string = "python";


  const fetchHandleCompile = async () => {
    let fetchLanguage: Language;
    
    setFeedback("");

    switch (languageParams) {
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
    <>
      <div className="pt-5 h-full w-[80%] ml-[10%] grid grid-cols-4 grid-rows-4 gap-5">
        <div className="col-start-1 col-end-3 row-span-full">
          <Card className="h-[96%] bg-nice-yellow bg-opacity-50 border-8 border-border-colour">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">Typing Challenge</p>
              </div>
            </CardHeader>
            <CardBody>
              {" "}
              <p className="text-xl">Time to start typing....</p>
            </CardBody>
            <div className="bg-black">
              <CodeEditor
                code={code}
                onChange={onChange}
                language={languageParams}
                theme={theme}
                height="40vh"
              />
            </div>
          </Card>
        </div>
        <div className="h-[34vh] col-start-3  col-span-3 row-start-3 row-span-2 mb-5">
          <Card className="h-[100%] gap-3 p-5 border-8 border-border-colour bg-nice-yellow bg-opacity-50">
            <OutputWindow outputDetails={outputDetails} feedback={feedback} />
            <div className="flex flex-row justify-between">
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
        <div className="row-start-1 row-span-2 col-start-3 col-span-3">
          <Card className="h-[100%] w-[100%] border-8 border-border-colour bg-nice-yellow bg-opacity-50  relative">
            <CardBody className=" p-5 h-[100%] w-[80%] relative">
              <p className="text-xl">
                <br /> <br />
                {challengeData.challengeQuestion}
              </p>
            </CardBody>
            <div className="absolute right-5 bottom-5">
              <Image
                src="/character2.png"
                alt="2d pixel chara cter with her arms in the air"
                className="p-0 h-[100%]"
              />
            </div>
          </Card>
        </div>
      </div>
      <div className="ml-[10%] mr-[10%]">
        <ChallengeFooter />
      </div>
    </>
  );
};

export default TypedChallenge;
