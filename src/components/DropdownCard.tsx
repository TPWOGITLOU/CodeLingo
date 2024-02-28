import { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@nextui-org/react";

const DropdownCard = (): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded((previousValue) => !previousValue);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black "
          onClick={toggleExpand}
        >
          {expanded ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem key="home" href="/">
          Home
        </DropdownItem>
        <DropdownItem key="about" href="/about">
          About
        </DropdownItem>
        <DropdownItem key="sandbox" href="/sandbox">
          Sandbox
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCard;
