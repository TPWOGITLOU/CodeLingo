"use client";

import { useContext, useEffect } from "react";
import { Accordion, AccordionItem, Button, Image } from "@nextui-org/react";
import { Topic } from "../../lib/mongo/utils";
import TopicTile from "./TopicTile";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
import { GlobalContext } from "../../contexts/globalContext";
import { FaTrophy } from "react-icons/fa6";

interface Prop {
  list: Topic[]; // may need to be a union for challengeList prop type
  language: string;
}

const AccordionUI = ({ list, language }: Prop): JSX.Element => {
  let {
    completedChallenges,
    pyChallengeIds,
    jsChallengeIds,
    setPyChallengeIds,
    setJsChallengeIds,
  } = useContext(GlobalContext);
  let topicsOrChallenges: boolean = true;
  if (!list[0].hasOwnProperty("topicInfo")) {
    topicsOrChallenges = false;
  }

  useEffect(() => {
    if (list[0].answer) {
      list.map((challenge) => {
        if (
          language === "python" &&
          !completedChallenges.includes(challenge._id) &&
          !pyChallengeIds.includes(challenge._id)
        ) {
          setPyChallengeIds([...pyChallengeIds, challenge._id]);
          localStorage.setItem(
            "pyChallengeIds",
            JSON.stringify(pyChallengeIds)
          );
        } else if (
          language === "javascript" &&
          !completedChallenges.includes(challenge._id) &&
          !jsChallengeIds.includes(challenge._id)
        ) {
          setJsChallengeIds([...jsChallengeIds, challenge._id]);
          localStorage.setItem(
            "jsChallengeIds",
            JSON.stringify(jsChallengeIds)
          );
        }
      });
    }
  }, []);

  const topicOrChallengeIds: string[] | false =
    topicsOrChallenges &&
    list.map((data) => {
      return data._id;
    });

  return (
    <section className="mt-6 flex flex-col items-center justify-center w-full">
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
                      <FaTrophy />
                    </span>
                  }
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-left">
                      {challengeData.challengeQuestion}{" "}
                    </p>
                    <Link href={`./${challengeData._id}`}>
                      <Button
                        disabled={
                          challengeData._id === pyChallengeIds[0] ||
                          challengeData._id === jsChallengeIds[0]
                            ? false
                            : true
                        }
                        color={
                          challengeData._id === pyChallengeIds[0] ||
                          challengeData._id === jsChallengeIds[0]
                            ? "success"
                            : "primary"
                        }
                        variant={
                          challengeData._id === pyChallengeIds[0] ||
                          challengeData._id === jsChallengeIds[0]
                            ? undefined
                            : "bordered"
                        }
                        className="float-right"
                      >
                        GO!
                      </Button>
                    </Link>
                  </div>
                </AccordionItem>
              );
            })}
      </Accordion>
      <ProgressBar topicOrChallengeIds={topicOrChallengeIds} />
    </section>
  );
};

export default AccordionUI;
