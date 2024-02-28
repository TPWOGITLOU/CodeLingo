"use client";

import { useContext, useEffect } from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { Topic } from "../../lib/mongo/utils";
import TopicTile from "./TopicTile";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
import { GlobalContext } from "../../contexts/globalContext";
import { FaTrophy } from "react-icons/fa6";
import type { Challenge } from "../../lib/interfaces/interfaces";
import TopicProgress from "./TopicProgress";

interface AccordianUIProps {
  list: Topic[]; // may need to be a union for challengeList prop type
  language: string;
  challengesByLanguage: Challenge[] | undefined;
}

const AccordionUI = ({
  list,
  language,
  challengesByLanguage,
}: AccordianUIProps): JSX.Element => {
  let {
    completedChallenges,
    pythonChallengeIds,
    javascriptChallengeIds,
    setPythonChallengeIds,
    setJavascriptChallengeIds,
  } = useContext(GlobalContext);

  let currentJavascriptChallenges: string[] = [];
  let currentPythonChallenges: string[] = [];

  const nextChallenge =
    pythonChallengeIds.filter(
      (challengeId) => !completedChallenges.includes(challengeId)
    )[0] ||
    javascriptChallengeIds.filter(
      (challengeId) => !completedChallenges.includes(challengeId)
    )[0];

  let isTopicList: boolean = true;
  console.log(list);
  if (list && !list[0].hasOwnProperty("topicInfo")) {
    isTopicList = false;
  }

  const topicOrChallengeIds: string[] | false =
    list &&
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
    setPythonChallengeIds(currentPythonChallenges);
    setJavascriptChallengeIds(currentJavascriptChallenges);
  }, [list]);

  useEffect(() => {
    localStorage.setItem(
      "pythonChallengeIds",
      JSON.stringify(pythonChallengeIds)
    );
    localStorage.setItem(
      "javascriptChallengeIds",
      JSON.stringify(javascriptChallengeIds)
    );
  }, [pythonChallengeIds, javascriptChallengeIds]);

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
        {isTopicList
          ? list.map((topicData) => {
              return (
                <AccordionItem
                  key={topicData._id}
                  aria-label={`Dropdown menu for ${topicData.topic}`}
                  title={
                    <span className="flex flex-row justify-between">
                      <p>{topicData.topic}</p>
                      {<TopicProgress challengesByLanguage={challengesByLanguage} topic={topicData.topic}/>}
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
      <ProgressBar
        topicOrChallengeIds={topicOrChallengeIds}
        challengesByLanguage={challengesByLanguage}
      />
    </section>
  );
};

export default AccordionUI;
