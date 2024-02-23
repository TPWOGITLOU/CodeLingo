"use client";
import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 h-screen justify-center items-center text-lg">
      <h2>Something went wrong!</h2>
      <Button color="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
