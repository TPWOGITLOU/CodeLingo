"use client";

import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import CodeEditor from "./CodeEditor";
import OutputWindow from "./OutputWindow";
import { Card, CardBody, Button, Image, CardHeader } from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";

const TypedChallenge = () => {
  let {
    language,
    outputDetails,
    setOutputDetails,
    code,
    setCode,
    processing,
    setProcessing,
    theme,
    setTheme,
  } = useContext(GlobalContext);

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
            <CardBody>Hello</CardBody>
            <div className="bg-black">
              <CodeEditor
                code={code}
                onChange={() => {}}
                language={language}
                theme={theme}
                height="40vh"
              />
            </div>
          </Card>
        </div>
        <div className="h-[34vh] col-start-3  col-span-3 row-start-3 row-span-2 mb-5">
          <Card className="h-[100%] gap-3 p-5 border-8 border-border-colour bg-nice-yellow bg-opacity-50">
            <OutputWindow outputDetails={outputDetails} />
            <div className="flex flex-row justify-between">
              <Button
                onClick={() => {}}
                disabled={!code}
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                {processing ? "Loading ..." : "Run"}
              </Button>
              <Button
                onClick={() => {}}
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
              <p>
                Explanation of the task.
                <br /> <br />
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
