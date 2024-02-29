"use client";

import { Challenge } from "../../lib/mongo/utils";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";
import { useState } from "react";
import Link from "next/link";

const MultipleChoice = (challengeData: Challenge): JSX.Element => {
  const defaultButtonStyle =
    "w-[40%] bg-blue-500 p-4 text-white rounded-lg hover:shadow-lg";
  const wrongButtonStyle =
    "w-[40%] bg-red-500 p-4 text-white rounded-lg hover:shadow-lg";
  const rightButtonStyle =
    "w-[40%] bg-green-500 p-4 text-white rounded-lg hover:shadow-lg";
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
      className="h-[90%]
    w-[80%]
    min-w-[450px]
    mt-[5%] mb-[5%] ml-auto mr-auto
    box-border
    "
    >
      <div
        id="grid"
        className="
        grid
        lg:grid-cols-2
        md:grid-cols-1
        gap-5
        mb-5"
      >
        <Card
          id="info-card"
          className="
            border-8 border-border-colour  bg-nice-yellow bg-opacity-50 
            p-5
            lg:col-span-2
          md:col-span-1"
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
              Click the right answer in the box below.
            </p>
          </CardBody>
        </Card>
        <Card id="question-card"
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
          flex
          place-items-center
          px-12 py-6
          mb-[60px]
          h-[70%]
          dark:text-header    
          overflow-scroll      
          "
            >
              <p className=" text-2xl">{challengeData.challengeQuestion}</p>
            </div>
            <div className="absolute bottom-0 left-2 overflow-hidden mb-[-5px]">
              <Image
                src="/character2.png"
                alt="2d pixel character with her arms in the air"
              />
            </div>
            <div className="absolute bottom-5 right-5">
              <Link
                href={`../../learning/${challengeData.language}/${challengeData.topic}/learning`}
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
          id="activity-card"
          className="
          border-8 border-border-colour 
          bg-nice-yellow bg-opacity-50"
        >
          <CardBody className="p-5 w-full">
            <div className="h-full flex flex-wrap gap-4 items-center justify-around">
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
                      className={`${defaultButtonStyle} w-[40%]`}
                    >
                      {String(question)}
                    </button>
                  );
                })}
            </div>
          </CardBody>
        </Card>
        
      </div>
      <ChallengeFooter finished={finished} />
    </main>
  );
};
export default MultipleChoice;
