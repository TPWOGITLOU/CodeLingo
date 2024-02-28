import Link from "next/link";

import {
  getAllChallengesByLanguage,
  getTopics,
} from "../../../../lib/mongo/utils";
import AccordionUI from "@/components/AccordionUI";
import type { Challenge } from "../../../../lib/interfaces/interfaces";

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

  const challengesByLanguage: Challenge[] | undefined =
    await getAllChallengesByLanguage(language);

  return (
    <section>
      <div className="mt-6 flex flex-col items-center justify-center font-bold text-center font-mono">
        <Link href="/">Home</Link>
        <h1 className="p-2 text-xl">Topics</h1>
        <h2>Here are the topics for {language}</h2>
      </div>
      {topics && (
        <AccordionUI
          list={topics}
          language={language}
          challengesByLanguage={challengesByLanguage}
        />
      )}
    </section>
  );
};

export default Topics;
