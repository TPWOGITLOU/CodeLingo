import Link from "next/link";
import Header from "@/components/Header";
import { Topic, getTopics } from "../../../lib/mongo/utils";
import TopicTile from "@/components/TopicTile";

const fetchTopics = async (language: string)=>{
  let collection:string;
  switch (language) {
      case "javascript":
          collection="JS-Topics"
          break;
      case "python":
          collection="PY-Topics"
      break;
      default:
          collection="";
          break;
  }
  try{
      return await getTopics(collection);
  }catch(err){
      throw new Error("There was a problem fetching the data in the topics page");
  }
}

const Topics = async () => {
  const jsTopics = await fetchTopics('javascript')
  const pyTopics = await fetchTopics('python')

  return (
    <section>
      <Header />
      <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
        <h1 className="p-2 text-xl">All topics, For all languages</h1>
        <span>go back to <Link href="/" className="text-link-orange">home</Link> to select either language</span>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-lg">Python</h2>
            <div>
                {!pyTopics? <p>loading</p>: pyTopics.map((topic: Topic)  => (
                    <TopicTile key={topic._id} name={topic.topic} slug={topic.topicSlug} language={'topics/python'} />
                    ))}
            </div>  

          </div>
          <div>
            <h2 className="text-lg">Javascript</h2>
            <div>
                {!jsTopics? <p>loading</p>: jsTopics.map((topic: Topic)  => (
                    <TopicTile key={topic._id} name={topic.topic} slug={topic.topicSlug} language={'topics/javascript'} />
                    ))}
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
