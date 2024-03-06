import React, { useState, ReactNode, useEffect } from "react";
import { Data } from "../lib/interfaces/interfaces";

export interface OutputDetails {
  status: { id: number };
  compile_output: string;
  stdout: string;
  stderr: string;
}

export interface GlobalContextProps {
  outputDetails: {} | OutputDetails | undefined;
  setOutputDetails: (outputDetails: OutputDetails | {} | undefined) => void;
  code: string | Data[];
  setCode: (code: string | Data[]) => void;
  processing: boolean;
  setProcessing: (processing: boolean) => void | (() => string);
  theme: string;
  setTheme: (theme: string) => void;
  completedChallenges: string[];
  setCompletedChallenges: (completedChallenges: string[]) => void;
  pythonChallengeIds: string[];
  setPythonChallengeIds: (pythonChallengeIds: string[]) => void;
  javascriptChallengeIds: string[];
  setJavascriptChallengeIds: (javascriptChallengeIds: string[]) => void;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  outputDetails: undefined,
  setOutputDetails: () => {},
  code: "",
  setCode: () => {},
  processing: false,
  setProcessing: () => {},
  theme: "",
  setTheme: () => {},
  completedChallenges: [],
  setCompletedChallenges: () => {},
  pythonChallengeIds: [""],
  setPythonChallengeIds: () => {},
  javascriptChallengeIds: [""],
  setJavascriptChallengeIds: () => {},
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [outputDetails, setOutputDetails] = useState<
    {} | undefined | OutputDetails
  >(undefined);
  const [code, setCode] = useState<Data[] | string>(
    "console.log('hello world!')"
  );
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState("vs-dark");
  const [completedChallenges, setCompletedChallenges] = useState([""]);
  const [pythonChallengeIds, setPythonChallengeIds] = useState([""]);
  const [javascriptChallengeIds, setJavascriptChallengeIds] = useState([""]);

  useEffect(() => {
    const getCompletedChallenges = () => {
      const completedChallenges = localStorage.getItem("completedChallenges");
      return completedChallenges ? JSON.parse(completedChallenges) : [];
    };

    const getPyChallengeIds = () => {
      const pythonChallengeIds = localStorage.getItem("pythonChallengeIds");
      return pythonChallengeIds ? JSON.parse(pythonChallengeIds) : [];
    };

    const getJsChallengeIds = () => {
      const javascriptChallengeIds = localStorage.getItem(
        "javascriptChallengeIds"
      );
      return javascriptChallengeIds ? JSON.parse(javascriptChallengeIds) : [];
    };

    if (typeof window !== "undefined") {
      setJavascriptChallengeIds(getJsChallengeIds());
      setPythonChallengeIds(getPyChallengeIds());
      setCompletedChallenges(getCompletedChallenges());
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        outputDetails: outputDetails,
        setOutputDetails: setOutputDetails,
        code: code,
        setCode: setCode,
        processing: processing,
        setProcessing: setProcessing,
        theme: theme,
        setTheme: setTheme,
        completedChallenges: completedChallenges,
        setCompletedChallenges: setCompletedChallenges,
        pythonChallengeIds: pythonChallengeIds,
        setPythonChallengeIds: setPythonChallengeIds,
        javascriptChallengeIds: javascriptChallengeIds,
        setJavascriptChallengeIds: setJavascriptChallengeIds,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
