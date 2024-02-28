import { fredoka } from "../../../fonts/font";
import { getTopics } from "../../../lib/mongo/utils";
import AccordionUI from "@/components/AccordionUI";

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

  return (
    <main>
      <div className="mt-6 flex flex-col items-center justify-center text-center ">
        <h1 className="p-2 text-5xl"> {languageUpperCase} Topics</h1>
        <h2 className={`${fredoka.variable} font-fredoka p-2 text-3xl`}>
          Get your teeth into these {languageUpperCase} topics!
        </h2>
      </div>
      {!topics ? (
        <p>loading</p>
      ) : (
        <AccordionUI list={topics} language={language} />
      )}
    </main>
  );
};

export default Topics;
