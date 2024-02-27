"use client";
import type { challenge } from "../../lib/mongo/utils";
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
} from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";

export default function Matching(challenge: challenge): JSX.Element {
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
          let e1Colour = element1.style.backgroundColor;
          let e2Colour = element2.style.backgroundColor;

          element1.style.backgroundColor = "red";
          element2.style.backgroundColor = "red";
          setTimeout(() => {
            element1.style.backgroundColor = e1Colour;
            element2.style.backgroundColor = e2Colour;
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
    const gridElement = document.getElementById("Grid");
    if (gridElement) {

      gridElement.className = `
      h-full w-full 
      grid grid-flow-dense matching-grid gap-6`;
  }}, [challenge]);


  return (
    <section
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
            <p className="text-3xl font-bold">
              {challenge.language} - {challenge.topic}
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{challenge.challengeQuestion}</p>
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
          ">
            <CardBody className="p-5">
                <div id="Grid">
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
          <Card id="information-card" className="          
          border-8 border-border-colour bg-nice-yellow bg-opacity-50
          grow 
          p-5
          "
        >
          <CardBody>
            <p>Click on the two matching items.</p>
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

    </section>
  );
}
