import React from "react";
import { Button } from "@nextui-org/react";

interface Props {
  slug: string;
}

const TopicTile = (props: Props): JSX.Element => {
  return (
    <>
      <p>{props.slug}</p>
      <div className="mt-4 mb-2 px-20 flex flex-row justify-between">
        <Button radius="full" size="sm" color="secondary" variant="bordered">Learn More </Button>
        <Button
          radius="full"
          size="sm"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Challenges
        </Button>
      </div>
    </>
  );
};

export default TopicTile;

