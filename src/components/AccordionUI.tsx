"use client";

import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import TopicProgress from "@/components/TopicProgress";
import { Topic } from "../../lib/mongo/utils";
import TopicTile from "./TopicTile";
import Link from "next/link";

interface Prop {
  list: Topic[]; // may need to be a union for challengeList prop type
  language: string;
}

const AccordionUI = ({ list, language }: Prop): JSX.Element => {
  let topicsOrChallenges: boolean = true;
  if (!list[0].hasOwnProperty("topicInfo")) {
    topicsOrChallenges = false;
  }

  return (
    <section className="mt-6 flex items-center justify-center w-full">
      <Accordion
        variant="splitted"
        className="flex w-[90%] md:w-[50%]"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        {topicsOrChallenges
          ? list.map((topicData) => {
              return (
                <AccordionItem
                  key={topicData._id}
                  aria-label={`Dropdown menu for ${topicData.topic}`}
                  title={
                    <span className="flex flex-row justify-between">
                      <p>{topicData.topic}</p>
                      {/* <TopicProgress /> */}
                    </span>
                  }
                >
                  <TopicTile
                    key={topicData.topic}
                    slug={topicData.topicSlug}
                    name={topicData.topic}
                    language={language}
                  />
                </AccordionItem>
              );
            })
          : list.map((challengeData, index) => {
              return (
                <AccordionItem
                  key={challengeData._id}
                  aria-label={"Accordion-" + challengeData.topic}
                  title={
                    <span className="flex flex-row justify-between">
                      <p> Challenge {index + 1}</p>
                    </span>
                  }
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-left">
                      {challengeData.challengeQuestion}{" "}
                    </p>
                    <Link href={`./${challengeData._id}`}>
                      {" "}
                      <Button
                        radius="full"
                        size="sm"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                      >
                        GO!
                      </Button>
                    </Link>
                  </div>
                </AccordionItem>
              );
            })}
      </Accordion>
    </section>
  );
};

export default AccordionUI;
