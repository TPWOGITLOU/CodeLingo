import { getQuestions } from "../../../../../lib/mongo/utils";
import AccordionUI from "@/components/AccordionUI";

const fetchQuestions = async (language: string, topic: string) => {
  let collection: string;
  switch (language) {
    case "javascript":
      collection = "JS-Questions";
      break;
    case "python":
      collection = "PY-Questions";
      break;
    default:
      collection = "";
      break;
  }
  try {
    return await getQuestions(collection, topic);
  } catch (err) {
    throw new Error("There was a problem fetching the data in the topics page");
  }
};

const Challenges = async ({
  params,
}: {
  params: { language: string; topic: string };
}) => {
  const language = params.language;
  const topic = params.topic;
  const questionList = await fetchQuestions(language, topic);
  let languageUpperCase: string;
  if (language === "javascript") {
    languageUpperCase = `${
      language.charAt(0).toUpperCase() +
      language.slice(1, 4) +
      language.charAt(4).toUpperCase() +
      language.slice(5)
    }`;
  } else {
    languageUpperCase = `${
      language.charAt(0).toUpperCase() + language.slice(1)
    }`;
  }

  return (
    <main className="h-full mt-[60px]">
      <div className="mt-6 mb-6 flex flex-col items-center justify-center text-center ">
        <h1 className="p-2 text-5xl text-header dark:text-white">
          {languageUpperCase} Challenges
        </h1>

        <div className="w-full">
          {questionList && (
            <AccordionUI
              list={questionList}
              language={language}
              challengesByLanguage={undefined}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Challenges;
