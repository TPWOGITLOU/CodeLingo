"use client";
import type { Challenge } from "../../lib/mongo/utils";
import { useState, useEffect } from "react";
import ButtonAGen from "./cardMatchAButtons";
import ButtonQGen from "./cardMatchQButtons";
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
import Link from "next/link";

export default function Matching(challenge: Challenge): JSX.Element {
  const [selection1, setSelection1] = useState("");
  const [selection1ID, setSelection1ID] = useState("");
  const [selection2, setSelection2] = useState("");
  const [optionsPicked, setOptionsPicked] = useState(false);
  let winningAns: boolean;
  const [selection2ID, setSelection2ID] = useState("");
  const [selectionType, setSelectionType] = useState("");
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleClick = (
    e: any,
    buttonID: string,
    buttonType: string,
    buttonContent: string
  ) => {
    if (selection1 === "") {
      setSelection1(buttonContent);
      setSelectionType(buttonType);
      setSelection1ID(buttonID);
    } else if (selection2 === "" && buttonType !== selectionType) {
      setSelection2(buttonContent);
      setSelectionType("");
      setSelection2ID(buttonID);
    }
  };

  useEffect(() => {
    if (selection1 !== "" && selection2 !== "") {
      setOptionsPicked(true);
    }
  }, [selection1, selection2]);

  useEffect(() => {
    if (optionsPicked === true) {
      const element1 = document.getElementById(
        selection1ID
      ) as HTMLButtonElement | null;
      const element2 = document.getElementById(
        selection2ID
      ) as HTMLButtonElement | null;

      if (selection1 !== "" && selection2 !== "") {
        let ans1: string[] = [selection1, selection2];
        let ans2: string[] = [selection2, selection1];

        for (let x = 0; x < challenge.answer.length; x++) {
          const loop = `correctAns${x + 1}`;
          const answer = challenge.answer[x] as {
            [key: string]: [string, string];
          };
          if (
            (answer[loop][0] === ans1[0] &&
              answer[loop][1] === ans1[1] &&
              element1 &&
              element2) ||
            (answer[loop][0] === ans2[0] &&
              answer[loop][1] === ans2[1] &&
              element1 &&
              element2)
          ) {
            element1.style.backgroundColor = "green";
            element1.disabled = true;
            element2.style.backgroundColor = "green";
            element2.disabled = true;

            winningAns = true;
            setProgress(progress + 1);
            break;
          } else {
            winningAns = false;
          }
        }
      }

      if (!winningAns) {
        if (element1 && element2) {
          element1.style.backgroundColor = "red";
          element2.style.backgroundColor = "red";
          setTimeout(() => {
            element1.style.backgroundColor = "";
            element2.style.backgroundColor = "";
          }, 500);
        }
      }
      setSelection1("");
      setSelection2("");
      setSelection1ID("");
      setSelection2ID("");
      setOptionsPicked(false);
    }
  }, [optionsPicked]);

  useEffect(() => {
    if (progress === challenge.answer.length) {
      setFinished(true);
    }
  }, [progress]);

  useEffect(() => {
    const gridElement = document.getElementById("activity-grid");
    if (gridElement) {
      gridElement.className = `
      h-full w-full 
      grid grid-flow-dense matching-grid gap-6`;
    }
  }, [challenge]);

  return (
    <main
      id="matching-game-container"
      className=" 
    w-[80%] min-w-[450px] max-w-[1440px]
    mt-10 mx-auto
    box-border">
      <div
        id="grid"
        className="max-w-[80%]
        mx-auto
        grid 
        lg:grid-cols-2
        md:grid-cols-1 
        gap-5 mb-5"
      >
        <Card
          id="info-card"
          className="border-8 border-border-colour  bg-nice-yellow bg-opacity-50 p-5 lg:col-span-2
        md:col-span-1"
        >
          <CardHeader className="flex gap-3">
            <p className="text-4xl">
              {challenge.language} -{" "}
              {`${challenge.topic
                .charAt(0)
                .toUpperCase()}${challenge.topic.slice(1)}`}
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-xl">Click on the two matching items below.</p>
          </CardBody>
        </Card>
        <Card
          id="question-card"
          className="
          bg-opacity-0 shadow-none p-0"
        >
          <CardBody className="flex w-full flex-row place-content-start p-5 overflow-hidden">
            <div
              id="speech-bubble"
              className="bg-white
          border border-white 
          rounded-l-full
          rounded-tr-full
          rounded-br-0
          text-center
          w-[90%]
          h-[75%]
          flex
          overflow-x-hidden     
          overflow-y-auto   
          place-items-center
          px-12 py-6
          mb-[60px]   
          dark:text-header       
          "
            >
              <p>
                {challenge.challengeQuestion}
              </p>
            </div>
            <div className="absolute bottom-0 right-2">
              <Image
                src="/character1.png"
                alt="2d pixel character with her arms in the air"
                className="float-right"
              />
            </div>
            <div className="absolute bottom-5 left-5">
              <Link
                href={`../../learning/${challenge.language}/${challenge.topic}/learning`}
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
          bg-nice-yellow bg-opacity-50
          "
        >
          <CardBody className="">
            <div id="activity-grid">
              <ButtonQGen
                Qsnippets={challenge.challengeSnippets[1]}
                selection1={selection1}
                setSelection1={setSelection1}
                setSelection2={setSelection2}
                setSelectionType={setSelectionType}
                setSelection1ID={setSelection1ID}
                selection2={selection2}
                selectionType={selectionType}
                setSelection2ID={setSelection2ID}
              />
              <ButtonAGen
                snippets={challenge.challengeSnippets[0]}
                selection1={selection1}
                setSelection1={setSelection1}
                setSelection2={setSelection2}
                setSelectionType={setSelectionType}
                setSelection1ID={setSelection1ID}
                selection2={selection2}
                selectionType={selectionType}
                setSelection2ID={setSelection2ID}
              />
            </div>
          </CardBody>
        </Card>
        
      </div>
      <div className="max-w-[80%] mx-auto">
        <ChallengeFooter finished={finished} />
      </div>
    </main>
  );
}
