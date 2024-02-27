"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { Topic } from "../../lib/mongo/utils";
import TopicTile from "./TopicTile";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
// import { GlobalContext } from "../../contexts/globalContext";
import { FaTrophy } from "react-icons/fa6";

interface AccordianUIProps {
  list: Topic[]; // may need to be a union for challengeList prop type
  language: string;
}

const AccordionUI = ({ list, language }: AccordianUIProps): JSX.Element => {
  const [javascriptChallengeIds, setJavasciptChallengeIds] = useState<string[]>(
    []
  );
  const [pythonChallengeIds, setPythonChallengeIds] = useState<string[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  let currentJavascriptChallenges: string[] = [];
  let currentPythonChallenges: string[] = [];

  const nextChallenge =
    pythonChallengeIds.filter(
      (challengeId) => !completedChallenges.includes(challengeId)
    )[0] ||
    javascriptChallengeIds.filter(
      (challengeId) => !completedChallenges.includes(challengeId)
    )[0];

  // let {
  //   completedChallenges,
  //   pyChallengeIds,
  //   jsChallengeIds,
  //   setPyChallengeIds,
  //   setJsChallengeIds,
  // } = useContext(GlobalContext);

  let topicsOrChallenges: boolean = true;
  console.log(list);
  if (list && !list[0].hasOwnProperty("topicInfo")) {
    topicsOrChallenges = false;
  }

  const topicOrChallengeIds: string[] | false =
    topicsOrChallenges &&
    list.map((data) => {
      return data._id;
    });

  useEffect(() => {
    if (list[0].answer) {
      list.map((challenge) => {
        if (
          language === "python" &&
          !currentPythonChallenges.includes(challenge._id)
        ) {
          currentPythonChallenges.push(challenge._id);
        } else if (
          language === "javascript" &&
          !currentJavascriptChallenges.includes(challenge._id)
        ) {
          currentJavascriptChallenges.push(challenge._id);
        }
      });
    }
    console.log(list);
    console.log(nextChallenge);
    setPythonChallengeIds(currentPythonChallenges);
    setJavasciptChallengeIds(currentJavascriptChallenges);
    setCompletedChallenges([list[0]._id, list[1]._id]);
  }, [list]);

  useEffect(() => {
    localStorage.setItem("pyChallengeIds", JSON.stringify(pythonChallengeIds));
    localStorage.setItem(
      "jsChallengeIds",
      JSON.stringify(javascriptChallengeIds)
    );
    localStorage.setItem(
      "completedChallenges",
      JSON.stringify(completedChallenges)
    );
  }, [pythonChallengeIds, javascriptChallengeIds, completedChallenges]);

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
              const isChallengeAvailable =
                completedChallenges.includes(challengeData._id) ||
                nextChallenge === challengeData._id;
              return (
                <AccordionItem
                  key={challengeData._id}
                  aria-label={"Accordion-" + challengeData.topic}
                  title={
                    <span className="flex flex-row justify-between">
                      <p> Challenge {index + 1}</p>
                      {completedChallenges.includes(challengeData._id) && (
                        <FaTrophy />
                      )}
                    </span>
                  }
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-left">
                      {challengeData.challengeQuestion}
                    </p>
                    <Link href={`./${challengeData._id}`}>
                      {isChallengeAvailable ? (
                        <Button
                          disabled={isChallengeAvailable ? false : true}
                          color={isChallengeAvailable ? "success" : "primary"}
                          variant={
                            isChallengeAvailable ? undefined : "bordered"
                          }
                          className="float-right"
                        >
                          GO!
                        </Button>
                      ) : (
                        <p>Complete previous challenges first!</p>
                      )}
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
