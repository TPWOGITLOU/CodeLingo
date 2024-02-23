"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import TopicProgress from "@/components/TopicProgress";
import { Topic } from "../../lib/mongo/utils";
import TopicTile from "./TopicTile";

interface Prop {
  topics: Topic[];
}

const AccordionUI = ({ topics }: Prop): JSX.Element => {
  return (
    <section className="mt-6 flex justify-center">
      <Accordion
      variant="splitted"
      className="w-2/3"

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
        {topics.map((topicData) => {
          return (
            <AccordionItem
              key={topicData.topicSlug}
              aria-label={"Accordion-" + topicData.topic}
              title={
                <span className="flex flex-row justify-between" >
                  <p>{topicData.topic}</p>
                  {/* <TopicProgress /> */}
                </span>
              }
            >
              <TopicTile
                key={topicData.topic}
                name={topicData.topic}
                slug={topicData.topicSlug}
              />
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default AccordionUI;
