import React, { useContext, useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";
import type { Challenge } from "../../lib/interfaces/interfaces";
import {
  GlobalContext,
  type GlobalContextProps,
} from "../../contexts/globalContext";

interface TopicProgressProps {
  challengesByLanguage: Challenge[] | undefined;
  topic: string;
}

const TopicProgress = ({ challengesByLanguage, topic }: TopicProgressProps) => {
  const [value, setValue] = React.useState(0);
  let { completedChallenges }: GlobalContextProps = useContext(GlobalContext);

  const topicChallengeIds: string[] = []; // total

  if (challengesByLanguage) {
    challengesByLanguage.forEach((challenge) => {
      if (challenge.topic === topic) {
        topicChallengeIds.push(challenge._id);
      }
    });
  }

  const completedTopicChallenges = completedChallenges.filter((challenge) =>
    topicChallengeIds.includes(challenge)
  ); // complete

  useEffect(() => {
    setValue(
      Math.round(
        (completedTopicChallenges.length * 100) / topicChallengeIds.length
      )
    );
  }, [completedChallenges]);

  return (
    <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="success"
      showValueLabel={true}
    />
  );
};

export default TopicProgress;
