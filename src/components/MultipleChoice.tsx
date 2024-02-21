import {
  Code,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import ChallengeFooter from "./ChallengeFooter";

const MultipleChoice = (): JSX.Element => {
  return (
    <section className="min-h-screen flex flex-col flex-wrap gap-8 items-center justify-center">
      <section className="max-w-[900px] flex flex-row flex-wrap gap-5">
        <div className="flex flex-col flex-wrap gap-5">
          <Card className="max-w-[550px] border-8 border-button-coral  bg-nice-yellow bg-opacity-50 flex-wrap">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-lg font-bold">Multiple Choice</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Pick one of the answers below based on the following q:</p>
            </CardBody>
            <div className="flex flex-wrap gap-8 p-2 mb-2 color=success">
              <Code size="sm">Code snippet</Code>
            </div>
            <Divider />
          </Card>
          <Card className="max-w-[550px] gap-3 pt-10 pb-10 border-8 border-button-coral  bg-nice-yellow bg-opacity-60">
            <CardBody>
              <div className="flex flex-wrap gap-4 items-center justify-around">
                <Code color="secondary">exampleCode("exampleCode")</Code>
                <Code color="secondary">exampleCode("exampleCode")</Code>
                <Code color="secondary">exampleCode("exampleCode")</Code>
                <Code color="secondary">exampleCode("exampleCode")</Code>
                <Code color="secondary">exampleCode("exampleCode")</Code>
                <Code color="secondary">exampleCode("exampleCode")</Code>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="max-w-[320px] md:w-full md:h-auto h-full border-medium border-button-coral bg-nice-yellow bg-opacity-50">
          <CardBody>
            <p>Explanation of the task and link to the information page</p>
          </CardBody>
          <CardFooter className="justify-end">
            <img
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
