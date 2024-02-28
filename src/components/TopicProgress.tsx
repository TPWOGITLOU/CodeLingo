import React, { useContext } from "react";
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

  const topicChallengeIds =
    challengesByLanguage &&
    challengesByLanguage.filter((challenge) => {
      if (challenge.topic === topic) {
        return challenge._id;
      }
    });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    console.log(topicChallengeIds);
    return () => clearInterval(interval);
  }, []);

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
