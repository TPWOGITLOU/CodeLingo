import { getQuestions } from "../../../../../../lib/mongo/utils";
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

const Challanges = async ({
  params,
}: {
  params: { language: string; topic: string };
}) => {
  const language = params.language;
  const topic = params.topic;
  const questionList = await fetchQuestions(language, topic);

  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
        <h1 className="p-2 text-xl">Challenges: {language}</h1>
        <h2>Here are the {topic} challenges</h2>
        <div className="w-full">
          {questionList && (
            <AccordionUI list={questionList} language={language} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Challanges;
