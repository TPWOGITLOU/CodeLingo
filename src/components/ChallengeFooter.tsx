"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";

const ChallengeFooter = (): JSX.Element => {
  const [nextButtonColour, setNextButtonColour] = useState<
    "primary" | "success"
  >("primary");
  const [nextButtonBorder, setNextButtonBorder] = useState<
    "bordered" | undefined
  >("bordered");

  return (
    <div className="max-w-[900px] md:w-full rounded-md border-medium border-button-coral bg-nice-yellow bg-opacity-50 p-5">
      <Button color="secondary" className="float-left">
        Back to Topics
      </Button>
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
