import Header from "@/components/Header";
import Link from "next/link"
import TopicTile from "@/components/TopicTile";

import { Topic, getTopics } from "../../../../lib/mongo/utils";
import AccordionUI from "@/components/AccordionUI";

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

const Topics = async ({params}: {params:{language:string}}) => {
    const language = params.language;
    const topicsList = await fetchTopics(language)

return (<section>
        <Header />
        <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
            <Link href="/">home</Link>
            <h1 className="p-2 text-xl">Topics</h1>
            <h2>Here are the topics for {language}</h2>
            <div>
                {!topicsList? <p>loading</p>: 
                <AccordionUI topicList={topicsList}/>}          
            </div>           
        </div>
    </section>)
}

export default Topics