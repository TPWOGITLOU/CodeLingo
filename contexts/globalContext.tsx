import React, { useState, ReactNode, useEffect } from "react";

interface GlobalContextProps {
  language: string;
  setLanguage: (language: string) => void;
  imgUrl: string;
  setImgUrl: (imgUrl: string) => void;
  outputDetails: undefined | any;
  setOutputDetails: (outputDetails: any) => void;
  code: any;
  setCode: (code: any) => void;
  processing: boolean;
  setProcessing: (processing: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  completedChallenges: string[];
  setCompletedChallenges: (completedChallenges: []) => void;
}

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  language: "",
  setLanguage: () => {},
  imgUrl: "",
  setImgUrl: () => {},
  outputDetails: {},
  setOutputDetails: () => {},
  code: "",
  setCode: () => {},
  processing: false,
  setProcessing: () => {},
  theme: "",
  setTheme: () => {},
  completedChallenges: [],
  setCompletedChallenges: () => {},
});

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [outputDetails, setOutputDetails] = useState<any>(undefined);
  const [code, setCode] = useState<string>("console.log('hello world!')");
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState("vs-dark");
  const [completedChallenges, setCompletedChallenges] = useState([]);

  useEffect(() => {
    const getLanguage = () => {
      const language = localStorage.getItem("language");
      return language ? JSON.parse(language) : "";
    };

    const getImage = () => {
      const image = localStorage.getItem("image");
      return image ? JSON.parse(image) : "";
    };

    const getCompletedChallenges = () => {
      const completedChallenges = localStorage.getItem("completedChallenges");
      return completedChallenges ? JSON.parse(completedChallenges) : [];
    };

    if (typeof window !== "undefined") {
      setCompletedChallenges(getCompletedChallenges());
      setCurrentLanguage(getLanguage());
      setImgUrl(getImage());
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        language: currentLanguage,
        setLanguage: setCurrentLanguage,
        imgUrl: imgUrl,
        setImgUrl: setImgUrl,
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
