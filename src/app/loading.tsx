import React from "react";
import { Spinner } from "@nextui-org/react";
const Loading = (): JSX.Element => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" flex gap-4 h-screen justify-center items-center">
      <Spinner size="lg" color="white" />
    </div>
  );
};

export default Loading;
