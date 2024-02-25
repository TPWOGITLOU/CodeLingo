"use client";
import { useState, useEffect } from "react";
import OutputWindow from "../../components/OutputWindow";
import CodeEditor from "../../components/CodeEditor";
import LanguageOptions from "../../components/LanguageOptions";
import { Card, CardBody, Image, select } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { compileCode, checkStatus } from "./api";
import Header from "@/components/Header";
import ThemeOptions from "@/components/ThemeOptions";

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
  const [code, setCode] = useState<string>(javascriptDefault);
  const [outputDetails, setOutputDetails] = useState<any>(undefined);
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState<{
    id: number;
    name: string;
    label: string;
    value: string;
  }>(languages[0]);

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

  const handleCompile = async () => {
    setProcessing(true);
    try {
      const response = await compileCode(language.id, code);
      const token = response;
      checkCompileStatus(token);
    } catch (error: unknown) {
      setProcessing(false);
    }
  };

  const checkCompileStatus = async (token: string) => {
    try {
      const response = await checkStatus(token);
      const statusId = response.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkCompileStatus(token);
        }, 2000);
      } else {
        setProcessing(false);
        setOutputDetails(response);
      }
    } catch (error: unknown) {
      setProcessing(false);
    }
  };

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
          <Card className="row-span-full w-full border-8 border-border-colour bg-nice-yellow bg-opacity-50 p-2 mb-5">
            <CodeEditor
              code={code}
              onChange={onChange}
              language={language?.value}
              theme={theme}
            />
          </Card>
        </div>
        <div className="h-[34vh] col-start-3  col-span-3 row-start-3 row-span-2 mr-5 mb-5">
          <Card className="h-[100%] gap-3 p-5 border-8 border-border-colour bg-nice-yellow bg-opacity-50">
            <OutputWindow outputDetails={outputDetails} />
            <div className="flex flex-row justify-between">
              <Button
                onClick={handleCompile}
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
        <div className="h-[37vh] row-start-1 row-span-2 col-start-3 col-span-2">
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
