"use client";

import { Challenge } from "../../lib/mongo/utils";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";
import { useState } from "react";


const MultipleChoice = (challengeData: Challenge): JSX.Element => {

  const defaultButtonStyle =
    "bg-blue-500 p-4 text-white rounded-lg hover:shadow-lg";
  const wrongButtonStyle =
    "bg-red-500 p-4 text-white rounded-lg hover:shadow-lg";
  const rightButtonStyle =
    "bg-green-500 p-4 text-white rounded-lg hover:shadow-lg";
  const [finished, setFinished] = useState(false);

  const onClick = (e: any, targetID: string, buttonContent: string) => {
    let correctAns: boolean = false;
    for (
      let x = 0;
      x < Object.entries(challengeData.challengeSnippets).length;
      x++
    ) {
      console.log(
        `Challenge Object : ${
          Object.entries(challengeData.challengeSnippets)[x][0]
        } | Intended Challenge Answer : ${
          Object.entries(challengeData.challengeSnippets)[x][1]
        } | Challenge Answer : ${String(
          Object.entries(challengeData.challengeSnippets)[x][1]
        )} | Provided Answer : ${buttonContent}`
      );
      if (
        Object.entries(challengeData.challengeSnippets)[x][0] ===
          challengeData.answer &&
        String(Object.entries(challengeData.challengeSnippets)[x][1]) ===
          buttonContent
      ) {
        const element = document.getElementById(targetID) as HTMLButtonElement;
        if (element) {
          element.className = rightButtonStyle;
          element.disabled = true;
          correctAns = true;
          setFinished(true);
        }
        break;
      }
    }
    if (!correctAns) {
      const element = document.getElementById(targetID);
      if (element) {
        element.className = wrongButtonStyle;
        setTimeout(() => {
          element.className = defaultButtonStyle;
        }, 500);
      }
    }
  };
  let questionSnippets = Object.values(challengeData.challengeSnippets);

  return (

    <main

      id="component-container"
      className=" 
    w-[80%]
    min-w-[450px]
    mt-10 ml-auto mr-auto
    box-border
    "
    >
      <div
        id="head-container"
        className="
        flex gap-5
        mb-5
        "
      >
        <Card
          id="question-card"
          className="
            w-full 
            border-8 border-border-colour  bg-nice-yellow bg-opacity-50 
            flex-wrap 
            p-5
            "
        >
          <CardHeader className="flex gap-3">

            <p className="text-4xl">
              {challengeData.language} -{" "}
              {`${challengeData.topic
                .charAt(0)
                .toUpperCase()}${challengeData.topic.slice(1)}`}

            </p>
          </CardHeader>
          <Divider />
          <CardBody>

            <p className="mt-2 text-2xl">
              {challengeData.challengeQuestion}
            </p>

          </CardBody>
        </Card>
      </div>
      <div id="activity-container" className="flex flex-wrap gap-5 mb-5">
        <Card
          id="activity-card"
          className="
          grow
          border-8 border-border-colour 
          bg-nice-yellow bg-opacity-50
          "
        >
          <CardBody className="p-5">
            <div className="flex gap-4 items-center justify-around">
              {questionSnippets &&
                questionSnippets.map((question, index) => {
                  return (
                    <button
                      key={index}
                      id={String(index)}
                      onClick={(e) => {
                        const target = e.target as HTMLButtonElement;
                        onClick(
                          e,
                          target.id,
                          (e.target as HTMLButtonElement)?.textContent || ""
                        );
                      }}
                      className={defaultButtonStyle}
                    >
                      {String(question)}
                    </button>
                  );
                })}
            </div>
          </CardBody>
        </Card>
        <Card
          id="information-card"
          className="          
          border-8 border-border-colour bg-nice-yellow bg-opacity-50
          grow 
          p-5
          "
        >
          <CardBody className="p-5">
            <p className=" text-2xl">
              Click the right answer.
            </p>
        
          </CardBody>
          <CardFooter className="justify-end">
            <Image
              src="/character2.png"
              alt="2d pixel character with her arms in the air"
              className="float-right"
            />
          </CardFooter>
        </Card>
      </div>
      <ChallengeFooter finished={finished} />

    </main>

  );
};
export default MultipleChoice;
