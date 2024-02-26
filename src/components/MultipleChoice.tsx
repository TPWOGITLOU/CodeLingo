"use client";
import { challenge } from "../../lib/mongo/utils";

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
import ChallengeFooter from "./ChallengeFooter";

const MultipleChoice = (challengeData: challenge): JSX.Element => {
  return (
    <section className="h-[90%] w-[80%] mt-10 ml-[10%] flex flex-col flex-wrap gap-8 items-center align-middle justify-center ">
      <section className="flex flex-row flex-wrap justify-between gap-5">
        <div className="md:max-w-[62%] w-[100%] flex flex-col flex-wrap gap-5">
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
            <div className="flex flex-wrap gap-8 mb-2 p-5 color=success">
              <Code size="sm">Example question with code?</Code>
            </div>
            <Divider />
          </Card>
          <Card className="gap-3 pt-10 pb-10 border-8 border-border-colour  bg-nice-yellow bg-opacity-50">
            <CardBody>
              <div className="flex flex-wrap gap-4 items-center justify-around">
                <Code color="secondary">A. exampleCode(exampleCode)</Code>
                <Code color="secondary">B. exampleCode(exampleCode)</Code>
                <Code color="secondary">C. exampleCode(exampleCode)</Code>
                <Code color="secondary">D. exampleCode(exampleCode)</Code>
                <Code color="secondary">E. exampleCode(exampleCode)</Code>
                <Code color="secondary">F. exampleCode(exampleCode)</Code>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="md:max-w-[50%] w-100% h-auto border-8 border-border-colour bg-nice-yellow bg-opacity-50 p-5">
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
      <ChallengeFooter />
    </section>
  );
};

export default MultipleChoice;
