import Header from "@/components/Header";
import Link from "next/link"

import { getQuestions } from "../../../../../lib/mongo/utils";

const fetchQuestions = async (language: string)=>{
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
        return await getQuestions(collection);
    }catch(err){
        throw new Error("There was a problem fetching the data in the topics page");
    }
}

const Challanges = async ({params}: {params:{language:string}}) => {
    const language = params.language;
    const questionList = await fetchQuestions(language)

return (<section>
        <Header />
        <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
            <Link href="/">home</Link>
            <h1 className="p-2 text-xl">Challenges</h1>
            <h2>Here are the challenges for {language}</h2>
            <div>
                <ul>

                {!questionList? <p>loading</p>: questionList.map((question: any)  => (
                    <li key={question._id}>
                        <p>{question.challengeQuestion}</p>
                    </li>
                    ))}
                </ul>
            </div>           
        </div>
    </section>)
}

export default Challanges