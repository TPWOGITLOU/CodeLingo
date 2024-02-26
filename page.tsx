"use client";
import { useState, useEffect } from "react";
import { challenge, Challenge } from "./testData";
import ButtonAGen from "@/app/Components/cardMatchAButtons";
import ButtonQGen from "@/app/Components/cardMatchQButtons";
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

export default function CardMatch(props: {
  challenge: Challenge;
}): JSX.Element {
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
      gridElement.className = `gridElement.className = h-full w-full grid grid-cols-3 grid-rows-${challenge.answer.length} justify-center mx-auto gap-6 z-10`;
  }}, [props.challenge]);

  return (
    <section className=" h-[90%] w-[80%] mt-10 ml-[10%] flex flex-col flex-wrap gap-8 items-center align-middle justify-center ">
      <section className="flex flex-row flex-wrap justify-between gap-5">
        <div className=" md:max-w-[62%] w-[100%] flex flex-col flex-wrap gap-5">
          <Card className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 flex-wrap p-5">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">Multiple Choice</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Pick one of the answers below based on the following q:</p>
            </CardBody>
            <div className="flex flex-wrap gap-8 mb-2 p-5 color-success">
              <Code size="sm">Example question with code?</Code>
            </div>
            <Divider />
          </Card>
          <Card id="Container" className="parent-div w-[150%] h-[80%] gap-3 pt-10 pb-10 border-8 border-border-colour bg-nice-yellow bg-opacity-50">
            <CardBody>
              <div className="child-div bg-yellow-500 h-full w-full items-center justify-center mx-auto relative">
                <div id="Grid" className="">
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
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="md:max-w-[35%] w-100% h-auto border-8 border-border-colour bg-nice-yellow bg-opacity-50 p-5 ml-4">
          <CardBody>
            <p>Explanation of the task and link to the information page</p>
          </CardBody>
          <CardFooter className="justify-end">
            <Image
              src="/character2.png"
              alt="2d pixel character with her arms in the air"
              className="float-right"
            />
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
