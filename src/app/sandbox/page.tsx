"use client";
import { useState, useEffect, useContext } from "react";
import OutputWindow from "../../components/OutputWindow";
import CodeEditor from "../../components/CodeEditor";
import LanguageOptions from "../../components/LanguageOptions";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { handleCompile } from "../../../lib/mongo/judge0/judge-utils";
import ThemeOptions from "@/components/ThemeOptions";
import { GlobalContext } from "../../../contexts/globalContext";
import SpriteAnimator from "@/components/SpriteAnimator";

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
    return await handleCompile(language, code, setProcessing, setOutputDetails);
  };

  return (
    <main
      id="sandbox"
      className=" 
        w-[80%]
        min-w-[450px]
        mt-10 ml-auto mr-auto
        box-border
        "
    >
      <div
        id="options"
        className="flex flex-row flex-wrap justify-center items-center p-4"
      >
        <LanguageOptions
          onSelectChange={onSelectChange}
          languages={languages}
        />
        <ThemeOptions setTheme={setTheme} />
      </div>

      <div id="grid" className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 mb-5">
        <Card
          className={
            theme === "vs"
              ? "border-8 border-border-colour bg-white col-start-1 md:row-span-1 lg:row-span-2 h-full"
              : theme === "vs-dark"
              ? "border-8 border-border-colour bg-neutral-800 col-start-1 md:row-span-1 lg:row-span-2 h-full"
              : "col-start-1 md:row-span-1 lg:row-span-2 h-full bg-neutral-800 border-8 border-border-colour"
          }
        >
          <CodeEditor
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme}
            height="31rem"
          />
        </Card>
        <Card
          id="instructions"
          className="
        border-8 border-border-colour 
        bg-nice-yellow bg-opacity-50"
        >
          <CardBody className="p-5 relative border">
          <div id="speech-bubble" className="bg-white
          border border-white 
          rounded-l-full
          rounded-tr-full
          rounded-br-0
          text-center
          w-[90%]
          px-12 py-6
          mb-[24px]
          ">
            <h3 className="mb-2 font-bold">Welcome to the sandbox area!</h3>
            <p className="mb-2">You can use the console on the left to practice what you have learnt so far. You can select the language that you would like to practice from the dropdown menu above, and if you like, you can even change the theme of the console (but this is totally optional!).</p>
            <p>When you are ready to test out your code, just hit the Run button below, and wait for your code to process in the output box.</p>
            </div>
            <div className="absolute bottom-0 right-2">
              <SpriteAnimator
                spriteWidth={79}
                spriteHeight={64}
                borderWidth={0}
                spacingWidth={0}
                animationCycle={[
                  { x: 0, y: 0 },
                  { x: 79, y: 0 },
                  { x: 158, y: 0 },
                  { x: 237, y: 0 },
                  { x: 316, y: 0 },
                  { x: 395, y: 0 },
                  { x: 474, y: 0 },
                  { x: 553, y: 0 },
                  { x: 632, y: 0 },
                  { x: 711, y: 0 },
                  { x: 790, y: 0 },
                ]}
                animationSpeed={250}
                imageSrc="/coffeeBeanSprite2.png"
              />
            </div>
          </CardBody>
        </Card>
        <Card
          id="output"
          className="h-full p-5 
        border-8 border-border-colour 
        bg-nice-yellow bg-opacity-50"
        >
          <OutputWindow outputDetails={outputDetails} />
          <div id="buttons" className="mt-3 flex flex-row justify-between">
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
    </main>
  );
};

export default Sandbox;
