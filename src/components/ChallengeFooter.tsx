"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface ChallengeFooterProps {
  finished?: boolean;
}

const ChallengeFooter = (props: ChallengeFooterProps): JSX.Element => {
  const router = useRouter();

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
      <Link href="/">
        <Button
          isDisabled={props.finished === true ? false : true}
          color={props.finished === true ? "success" : "primary"}
          variant={props.finished === true ? undefined : "bordered"}
          className="float-right"
        >
          Next
        </Button>
      </Link>
    </div>
  );
};

export default ChallengeFooter;
