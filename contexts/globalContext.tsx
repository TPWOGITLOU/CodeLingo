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
});

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [outputDetails, setOutputDetails] = useState<any>(undefined);
  const [code, setCode] = useState<string>("console.log('hello world!')");
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState("vs-dark");

  useEffect(() => {
    const getLanguage = () => {
      const language = localStorage.getItem("language");
      return language ? JSON.parse(language) : "";
    };

    const getImage = () => {
      const image = localStorage.getItem("image");
      return image ? JSON.parse(image) : "";
    };

    if (typeof window !== "undefined") {
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
