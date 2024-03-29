import React from "react";
import { Data } from "../../lib/interfaces/interfaces";

interface ButtonAGenProps {
  snippets: Data;
  selection1: string;
  setSelection2: React.Dispatch<React.SetStateAction<string>>;
  setSelectionType: React.Dispatch<React.SetStateAction<string>>;
  setSelection1ID: React.Dispatch<React.SetStateAction<string>>;
  selection2: string;
  selectionType: string;
  setSelection2ID: React.Dispatch<React.SetStateAction<string>>;
  setSelection1: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonAGen: React.FC<ButtonAGenProps> = ({
  snippets,
  selection1,
  selection2,
  selectionType,
  setSelection1ID,
  setSelection2,
  setSelection2ID,
  setSelectionType,
  setSelection1,
}) => {
  const snippetArr = Object.values(snippets);

  const handleClick = (
    e: React.MouseEvent,
    buttonID: string,
    buttonType: string,
    buttonContent: string
  ) => {
    let selection1Element;
    if (selection1 === "") {
      setSelection1(buttonContent);
      setSelectionType(buttonType);
      setSelection1ID(buttonID);
      selection1Element = document.getElementById(buttonID);
      if (selection1Element) selection1Element.style.backgroundColor = "grey";
    } else if (selection2 === "" && buttonType !== selectionType) {
      setSelection2(buttonContent);
      setSelectionType("");
      setSelection2ID(buttonID);
    }
  };

  return (
    <>
      {snippetArr &&
        snippetArr.map((snippet, index) => (
          <button
            key={index}
            id={`snippet${index + 1}`}
            className={`bg-orange-500 col-start-1 p-4 text-white rounded-lg hover:shadow-lg`}
            onClick={(e) => {
              const target = e.target as HTMLButtonElement;
              handleClick(
                e,
                target.id,
                "snippet",
                (e.target as HTMLButtonElement)?.textContent || ""
              );
            }}
          >
            {snippet}
          </button>
        ))}
    </>
  );
};

export default ButtonAGen;
