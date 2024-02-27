"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ChallengeModal from "./ChallengeModal";
import { useParams } from "next/navigation";

interface ChallengeFooterProps {
  finished?: boolean;
}

const ChallengeFooter = (props: ChallengeFooterProps): JSX.Element => {
  const router = useRouter();
  const params = useParams<{ language: string; challengeID: string }>();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full">
      <Button
        onClick={handleBack}
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Back to Challenges
      </Button>
      <Link href={`/topics/${params.language}`}>
        <Button
          isDisabled={props.finished === true ? false : true}
          color={props.finished === true ? "success" : "primary"}
          variant={props.finished === true ? undefined : "bordered"}
          className="float-right"
        >
          Next
        </Button>
      </Link>
      {props.finished && <ChallengeModal />}
    </div>
  );
};

export default ChallengeFooter;
