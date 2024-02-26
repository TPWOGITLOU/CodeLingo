"use client";
import { useState, useEffect, useContext } from "react";
import OutputWindow from "../../components/OutputWindow";
import CodeEditor from "../../components/CodeEditor";
import LanguageOptions from "../../components/LanguageOptions";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { handleCompile } from "../../../lib/mongo/judge0/judge-utils";
import Header from "@/components/Header";
import ThemeOptions from "@/components/ThemeOptions";
import { GlobalContext } from "../../../contexts/globalContext";

const languages = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  },
  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    value: "python",
  },
];

const javascriptDefault = "console.log('hello world!')";
const pythonDefault = "print('hello world!')";

const Sandbox: React.FC = (): JSX.Element => {
  const [language, setLanguage] = useState<{
    id: number;
    name: string;
    label: string;
    value: string;
  }>(languages[0]);
  let {
    outputDetails,
    setOutputDetails,
    code,
    setCode,
    processing,
    setProcessing,
    theme,
    setTheme,
  } = useContext(GlobalContext);

  const onSelectChange = (selectedLanguage: string | null) => {
    if (selectedLanguage !== null) {
      setLanguage(() => {
        return selectedLanguage === "JavaScript (Node.js 12.14.0)"
          ? languages[0]
          : languages[1];
      });
    }
  };

  const handleReset = () => {
    setOutputDetails(undefined);
    setCode(() => {
      return language.value === "javascript"
        ? javascriptDefault
        : pythonDefault;
    });
  };

  useEffect(() => {
    setOutputDetails(undefined);
    setCode(() => {
      return language.value === "javascript"
        ? javascriptDefault
        : pythonDefault;
    });
  }, [language]);

  const onChange = (action: unknown, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
    }
  };

  const fetchHandleCompile = async () => {
    return await handleCompile(language, code, setProcessing, setOutputDetails)
  }

  return (
    <main>
      <Header />
      <div className="flex flex-row justify-center items-center p-4">
        <LanguageOptions
          onSelectChange={onSelectChange}
          languages={languages}
        />
        <ThemeOptions setTheme={setTheme} />
      </div>

      <div className="h-full w-[80%] ml-[10%] grid grid-cols-4 grid-rows-4 gap-5">
        <div className="col-start-1 col-end-3 row-span-full">
          <Card
            className={
              theme === "vs"
                ? "row-span-full w-full border-8 border-white bg-white p-2 mb-5"
                : theme === "vs-dark"
                ? "row-span-full w-full border-8 border-neutral-800 bg-neutral-800 p-2 mb-5"
                : "row-span-full w-full border-8 border-black bg-black p-2 mb-5"
            }
          >
            <CodeEditor
              code={code}
              onChange={onChange}
              language={language?.value}
              theme={theme}
              height="70vh"
            />
          </Card>
        </div>
        <div className="h-[34vh] col-start-3  col-span-3 row-start-3 row-span-2 mb-5">
          <Card className="h-[100%] gap-3 p-5 border-8 border-border-colour bg-nice-yellow bg-opacity-50">
            <OutputWindow outputDetails={outputDetails} />
            <div className="flex flex-row justify-between">
              <Button
                onClick={fetchHandleCompile}
                disabled={!code}
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                {processing ? "Loading ..." : "Run"}
              </Button>
              <Button
                onClick={handleReset}
                disabled={!code}
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Reset
              </Button>
            </div>
          </Card>
        </div>
        <div className="h-[37vh] row-start-1 row-span-2 col-start-3 col-span-3">
          <Card className="h-[100%] border-8 border-border-colour bg-nice-yellow bg-opacity-50 p-5 relative">
            <CardBody className="h-[100%] w-[80%] relative">
              <p>
                Welcome to the sandbox area!
                <br /> <br />
                You can use the console on the left to practice what you have
                learnt so far. You can select the language that you would like
                to practice from the dropdown menu above, and if you like, you
                can even change the theme of the console (but this is totally
                optional!).
                <br />
                <br />
                When you are ready to test out your code, just hit the Run
                button below, and wait for your code to process in the output
                box.
              </p>
            </CardBody>
            <div className="absolute right-5 bottom-5">
              <Image
                src="/character2.png"
                alt="2d pixel chara cter with her arms in the air"
                className="p-0 h-[100%]"
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Sandbox;
