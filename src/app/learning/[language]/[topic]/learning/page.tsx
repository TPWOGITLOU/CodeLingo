import { getTopics } from "../../../../../../lib/mongo/utils";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";

type TopicInfo = {
  [key: string]: string;
};

const Learning = async ({
  params,
}: {
  params: { language: string; topic: string };
}) => {
  let language = params.language;
  let topic = params.topic;
  language === "javascript"
    ? (language = "JS-Topics")
    : (language = "PY-Topics");
  const pageData = await getTopics(language);

  let topicData: string[] = [];

  for (let entry in pageData) {
    if (pageData[Number(entry)]["topic"] === topic) {
      for (let y in Object(pageData[Number(entry)].topicInfo)) {
        let yn = String(y);
        topicData.push(Object(pageData[Number(entry)].topicInfo)[`${yn}`]);
      }
    }
  }

  return (
    <>
      <div className="mt-6 flex flex-row justify-center text-lg">
        <Link href="/">Home</Link>
      </div>
      <section className="mt-10 flex flex-row justify-center">
        <div className="md:max-w-[65%] w-[100%] flex flex-col flex-wrap gap-5">
          <Card className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 flex-wrap p-5">
            <CardHeader className="flex flex-col">
              <h1 className="text-3xl font-bold">Welcome to Learning</h1>
              <br></br>
              <p className="text-lg font-semibold ">
                Here is some useful information about {topic}
              </p>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="text-base text-fuchsia-700">
                {topicData.map((individualInfo: string, index: number) => {
                  const regexTitle = /^([^|\n]+)/
                  const matchTitle = individualInfo.match(regexTitle)
                  const firstWord = matchTitle ? matchTitle[1] : ""

                  const regexBody = /\|(.+)/
                  const matchBody = individualInfo.match(regexBody);
                  const wordsAfterHash = matchBody ? matchBody[1] : ""
                  return (
                    <section key={100 + index}>
                      <br key={index}></br>
                      <h1 className="text-center font-bold underline border-b-2 border-solid border-border-colour">{firstWord}</h1>
                      <br />
                      <p className="text-center">{wordsAfterHash}</p>
                    </section>
                  );
                })}
              </ul>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link href={`../../../${params.language}/${params.topic}/challenges`}>
              <Button
                radius="full"
                size="sm"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Challenges
              </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

//

export default Learning;
