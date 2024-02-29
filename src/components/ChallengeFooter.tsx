"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ChallengeModal from "./ChallengeModal";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { GlobalContextProps } from "../../contexts/globalContext";

interface ChallengeFooterProps {
  finished?: boolean;
}

const ChallengeFooter = (props: ChallengeFooterProps): JSX.Element => {
  const params = useParams<{
    language: string;
    topic: string;
    challenge: string;
  }>();
  let {
    completedChallenges,
    pythonChallengeIds,
    javascriptChallengeIds,
    setCompletedChallenges,
  }: GlobalContextProps = useContext(GlobalContext);

  const nextChallenge =
    pythonChallengeIds.filter(
      (challengeId) => !completedChallenges.includes(challengeId)
    )[0] ||
    javascriptChallengeIds.filter(
      (challengeId) => !completedChallenges.includes(challengeId)
    )[0];

  if (props.finished && !completedChallenges.includes(params.challenge)) {
    setCompletedChallenges([...completedChallenges, params.challenge]);
    localStorage.setItem(
      "completedChallenges",
      JSON.stringify([...completedChallenges, params.challenge])
    );
  }

  return (
    <div className="w-full mb-5">
      <Link href={`/${params.language}/${params.topic}/challenges`}>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Back to Challenges
        </Button>
      </Link>
      {nextChallenge ? (
        <Link href={`/${params.language}/${params.topic}/${nextChallenge}`}>
          <Button
            isDisabled={props.finished === true ? false : true}
            color={props.finished === true ? "success" : "primary"}
            variant={props.finished === true ? undefined : "bordered"}
            className="float-right text-white"
          >
            Next
          </Button>
        </Link>
      ) : (
        <Link href={`/${params.language}/${params.topic}/challenges`}>
          <Button
            isDisabled={props.finished === true ? false : true}
            color={props.finished === true ? "success" : "primary"}
            variant={props.finished === true ? undefined : "bordered"}
            className="float-right text-white"
          >
            Finished
          </Button>
        </Link>
      )}
      {props.finished === true && !nextChallenge && <ChallengeModal />}
    </div>
  );
};

export default ChallengeFooter;
