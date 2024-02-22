"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ChallengeFooter = (): JSX.Element => {
  const [nextButtonColour, setNextButtonColour] = useState<
    "primary" | "success"
  >("success");
  const [nextButtonBorder, setNextButtonBorder] = useState<
    "bordered" | undefined
  >(undefined);

  return (
    <div className="w-full">
      <Link href="/topics">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Back to Topics
        </Button>
      </Link>
      <Button
        color={nextButtonColour}
        variant={nextButtonBorder}
        className="float-right"
      >
        Next
      </Button>
    </div>
  );
};

export default ChallengeFooter;
