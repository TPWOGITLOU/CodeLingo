import Header from "@/components/Header";
import Link from "next/link"

import { getQuestions } from "../../../../../../lib/mongo/utils";

const fetchQuestions = async (language: string, topic :string)=>{
    let collection:string;
    switch (language) {
        case "javascript":
            collection="JS-Questions"
            break;
        case "python":
            collection="PY-Questions"
        break;
        default:
            collection="";
            break;
    }
    try{
        return await getQuestions(collection, topic);
    }catch(err){
        throw new Error("There was a problem fetching the data in the topics page");
    }
}

const Challanges = async ({params}: {params:{language:string, topic:string}}) => {
    const language = params.language;
    const topic = params.topic
    const questionList = await fetchQuestions(language, topic)

return (<section>
        <Header />
        <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
            <h1 className="p-2 text-xl">Challenges: {language}</h1>
            <h2>Here are the {topic} challenges</h2>
            <div>
                <ul>

                {!questionList? <p>loading</p>: questionList.map((question: any, counter: number)  => (
                    <li key={question._id} className="my-2 border-solid border-black hover:bg-back-green border-2 rounded">
                        <div className="flex flex-row p-2 gap-2">
                        <p>{(counter + 1) + "."}</p>
                        <p>{question.challengeQuestion}</p>
                        <Link href={`./${question._id}`}><p className="px-1 border-solid rounded hover:bg-link-orange">GO-{'>'}</p></Link>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>           
        </div>
    </section>)
}

export default Challanges