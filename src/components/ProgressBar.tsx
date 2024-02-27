"use client";
import React from "react";
import { Progress } from "@nextui-org/react";
import { GlobalContext } from "../../contexts/globalContext";
import { useContext, useEffect } from "react";

interface ProgressBarProps {
  topicOrChallengeIds: string[] | false;
}

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  let { completedChallenges } = useContext(GlobalContext);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (props.topicOrChallengeIds && completedChallenges) {
      setValue(
        Math.round(
          (completedChallenges.length / props.topicOrChallengeIds.length) * 100
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
