"use client";

import { Challenge } from "../../lib/mongo/utils";
import { useState, useEffect } from "react";
import { DragAndDrop } from "./DragAndDrop";
import ChallengeFooter from "./ChallengeFooter";
import { Data } from "../../lib/interfaces/interfaces";

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Link,
  Button,
} from "@nextui-org/react";

const Block = (challengeData: Challenge) => {
  const initialList: any[] = [...challengeData.challengeSnippets];
  //convert to data array
  const numIndexList = [];
  for (let i = 0; i < initialList.length; i++) {
    numIndexList.push(initialList[i]);
    numIndexList[i].id = +numIndexList[i].id;
  }

  const [listItems, setListItems] = useState<Data[]>(numIndexList);
  const [correctState, setCorrectState] = useState(false);
  const correctAnswer = challengeData.answer;

  useEffect(() => {
    let answerString = "";
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].status === "answer") {
        answerString = answerString + listItems[i].content;
      }
    }
    if (answerString === correctAnswer) {
      setCorrectState(true);
    } else {
      setCorrectState(false);
    }
  }, [listItems]);

  return (
    <main
      id="block-game-container"
      className="w-[80%] min-w-[450px] max-w-[1440px]
    mt-10 mx-auto
    box-border"
    >
      <div
        id="grid"
        className="max-w-[80%]
        mx-auto grid 
        lg:grid-cols-2
        md:grid-cols-1 
        gap-5 mb-5"
      >
        <Card
          id="info-card"
          className="border-8 border-border-colour  bg-nice-yellow bg-opacity-50 p-5 lg:col-span-2
        md:col-span-1"
        >
          <CardHeader>
            <h1 className="text-3xl font-bold">
              {challengeData.language} -{" "}
              {`${challengeData.topic
                .charAt(0)
                .toUpperCase()}${challengeData.topic.slice(1)}`}
            </h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="mt-2 text-2xl">
              Drag the code blocks to build the answer
            </p>
          </CardBody>
        </Card>
        <Card
          id="feedback-card"
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
            md:h-[75%]
            h-[100%]
            p-10
            flex
            place-items-center
            dark:text-header
            overflow-x-hidden     
            overflow-y-auto   
            "
            >
              {correctState ? (
                <p className="text-2xl text-green-500 font-bold">
                  Well done! That is the correct answer.
                </p>
              ) : (
                <p className="text-2xl pl-5">
                  {challengeData.challengeQuestion}
                </p>
              )}
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
          className="p-5
        border-8 border-border-colour bg-nice-yellow bg-opacity-50"
        >
          <DragAndDrop listItems={listItems} setListItems={setListItems} />
        </Card>
        
      </div>
      <div className="max-w-[80%] mx-auto">
        <ChallengeFooter finished={correctState} />
      </div>
    </main>
  );
};

export default Block;
