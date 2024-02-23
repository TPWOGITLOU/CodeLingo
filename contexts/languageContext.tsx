import React, { useState, ReactNode, useEffect } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  imgUrl: string;
  setImgUrl: (imgUrl: string) => void;
}

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContext = React.createContext<LanguageContextProps>({
  language: "",
  setLanguage: () => {},
  imgUrl: "",
  setImgUrl: () => {},
});

const LanguageContextProvider = (props: LanguageContextProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

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
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        setLanguage: setCurrentLanguage,
        imgUrl: imgUrl,
        setImgUrl: setImgUrl,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
