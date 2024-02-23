"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import TopicProgress from "@/components/TopicProgress";
import { Topic } from "../../lib/mongo/utils";
import TopicTile from "./TopicTile";

interface Prop {
  list: Topic[]; // may need to be a union for challengeList prop type
}

const AccordionUI = ({ list }: Prop): JSX.Element => {
  let topicsOrChallenges: boolean = true
  if (!list[1].topicInfo) {
    topicsOrChallenges = false
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
        {topicsOrChallenges ? list.map((topicData, index) => {
          return (
            <AccordionItem
              key={topicData.topicSlug + index}
              aria-label={"Accordion-" + topicData.topic}
              title={
                <span className="flex flex-row justify-between">
                  <p>{topicData.topic}</p>
                  {/* <TopicProgress /> */}
                </span>
              }
            >
              <TopicTile key={topicData.topic} slug={topicData.topicSlug} />
            </AccordionItem>
          )
        }): 
        list.map((challengeData, index) => {
          return (
            <AccordionItem
              key={challengeData._id}
              aria-label={"Accordion-" + challengeData.topic}
              title={
                <span className="flex flex-row justify-between">
                  <p> Challenge {index +1}</p>
                </span>
              }
            >
             {challengeData.challengeQuestion}
            </AccordionItem>
          );
        })
        }
      </Accordion>
    </section>
  );
};

export default AccordionUI;
