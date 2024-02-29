import { fredoka } from "../../../fonts/font";
import {
  getAllChallengesByLanguage,
  getTopics,
} from "../../../lib/mongo/utils";

import AccordionUI from "@/components/AccordionUI";
import type { Challenge } from "../../../lib/interfaces/interfaces";

const fetchTopics = async (language: string) => {
  let collection: string;
  switch (language) {
    case "javascript":
      collection = "JS-Topics";
      break;
    case "python":
      collection = "PY-Topics";
      break;
    default:
      collection = "";
      break;
  }
  try {
    return await getTopics(collection);
  } catch (err) {
    throw new Error("There was a problem fetching the data in the topics page");
  }
};

const Topics = async ({ params }: { params: { language: string } }) => {
  const language = params.language;
  const topics = await fetchTopics(language);

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

  const challengesByLanguage: Challenge[] | undefined =
    await getAllChallengesByLanguage(language);

  return (
    <main className="h-full mt-[60px]">
      <div className="mt-6 mb-6 flex flex-col items-center justify-center text-center ">
        <h1 className="p-2 text-5xl text-header dark:text-white">
          {" "}
          {languageUpperCase} Topics
        </h1>
        <h2 className={`${fredoka.variable} font-fredoka p-2 text-3xl`}>
          Get your teeth into these {languageUpperCase} topics!
        </h2>
      </div>
      {topics && (
        <AccordionUI
          list={topics}
          language={language}
          challengesByLanguage={challengesByLanguage}
        />
      )}
    </main>
  );
};

export default Topics;
