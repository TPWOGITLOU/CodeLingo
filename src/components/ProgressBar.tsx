"use client";
import React from "react";
import { Progress } from "@nextui-org/react";
import { GlobalContext } from "../../contexts/globalContext";
import { useContext, useEffect } from "react";
import type { Challenge } from "../../lib/interfaces/interfaces";

interface ProgressBarProps {
  topicOrChallengeIds: string[] | false;
  challengesByLanguage: Challenge[] | undefined;
}

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  let { completedChallenges } = useContext(GlobalContext);
  const [value, setValue] = React.useState(0);

  const challengeIds = props.challengesByLanguage
    ? props.challengesByLanguage.map((challenge) => challenge._id)
    : [""];

  const completedChallengesForLanguage = challengeIds
    ? completedChallenges.filter((challengeId) =>
        challengeIds?.includes(challengeId)
      )
    : [""];

  useEffect(() => {
    if (props.topicOrChallengeIds && completedChallenges && challengeIds) {
      setValue(
        Math.round(
          (completedChallengesForLanguage.length / challengeIds.length) * 100
        )
      );
    }
  }, [completedChallenges]);

  return (
    <>
      <Progress
        aria-label="Progress"
        size="md"
        value={value}
        color="success"
        showValueLabel={true}
        className="max-w-md p-4"
      />
      <p>Overall Progress!</p>
    </>
  );
};

export default ProgressBar;
