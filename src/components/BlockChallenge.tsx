"use client";

import { Challenge } from "../../lib/mongo/utils";
import { useState, useEffect } from "react";
import { DragAndDrop } from "./DragAndDrop";
import ChallengeFooter from "./ChallengeFooter";
import { Data } from "../../lib/interfaces/interfaces";

import {
  Code,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
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
    <section
      id="block-game-container"
      className="flex flex-col gap-5
    w-[80%] min-w-[450px]
    mt-10 ml-auto mr-auto
    box-border"
    >
      <Card
        id="question-card"
        className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 p-5"
      >
        <CardHeader>

          <h1 className="text-3xl font-bold">{challengeData.language} - {`${challengeData.topic
                .charAt(0)
                .toUpperCase()}${challengeData.topic.slice(1)}`}</h1>

        </CardHeader>
        <Divider />
        <h1 className="text-lg mx-auto">{challengeData.challengeQuestion}</h1>
      </Card>
      <div id="activity-container" className="flex flex-row flex-wrap gap-5">
        <Card
          id="activity-card"
          className="p-5
          border-8 border-border-colour bg-nice-yellow bg-opacity-50"
        >
          <DragAndDrop listItems={listItems} setListItems={setListItems} />
        </Card>
        <Card
          id="feedback-card"
          className="grow p-5 
        border-8 border-border-colour bg-nice-yellow bg-opacity-50         

        items-center"
        >
          <div className="bg-white p-5 rounded-lg w-full min-w-[40px] h-40 text-center">
            {correctState ? (
              <p className="text-l text-green-500 font-bold">
                Well done! That is the correct answer.
              </p>
            ) : (
              <p className="text-l dark:text-text-purple">
                drag and drop the code blocks to build the answer
              </p>
            )}
          </div>
          <Image
            className="mb-2"
            src="/character2.png"
            alt="2d pixel character with her arms in the air"
          />
        </Card>
      </div>
      <ChallengeFooter finished={correctState} />
    </section>
  );
};

export default Block;
